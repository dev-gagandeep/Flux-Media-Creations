"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  streaming?: boolean;
}

const QUICK_PROMPTS = [
  { label: "Pricing", text: "What are your prices?" },
  { label: "How fast?", text: "How quickly can you build a website?" },
  { label: "GHL setup", text: "Can you set up GoHighLevel for my business?" },
  { label: "Book a call", text: "I want to book a free discovery call" },
  { label: "Healthcare", text: "Do you work with healthcare clinics?" },
  { label: "What is AEO?", text: "What is AEO and AI search optimisation?" },
];

const GREETING = `Hey, I'm Flux, the AI assistant for Flux Media Creations.

I can help you with:
- services and pricing
- how we build websites and automations
- portfolio examples
- getting a quote
- booking a free discovery call

What would you like to know?`;

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>")
    .replace(/^(.+)$/, "<p>$1</p>");
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 py-0.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background: "var(--flux)",
            animation: `chatDot 1.2s ease-in-out ${i * 0.18}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-end gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isUser && (
        <div
          className="mb-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
          style={{ background: "var(--flux)", color: "white", fontFamily: "Clash Display, sans-serif" }}
        >
          F
        </div>
      )}

      <div
        className={`relative max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser ? "rounded-br-sm text-white" : "rounded-bl-sm"
        }`}
        style={
          isUser
            ? { background: "var(--ink)", color: "#FAF8F4" }
            : {
                background: "white",
                color: "var(--ink)",
                border: "1px solid rgba(13,13,13,0.08)",
                boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
              }
        }
      >
        {msg.streaming && msg.content === "" ? (
          <TypingIndicator />
        ) : (
          <div className="chat-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }} />
        )}
        {msg.streaming && msg.content !== "" && (
          <span
            className="ml-0.5 inline-block h-3.5 w-1 rounded-sm align-middle animate-pulse"
            style={{ background: "var(--flux)" }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function FluxChat() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "0", role: "assistant", content: GREETING, timestamp: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [unread, setUnread] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open, scrollToBottom]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      window.setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) {
        return;
      }

      setShowQuick(false);
      setInput("");
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
      }

      const userMsg: Message = {
        id: Date.now().toString(),
        role: "user",
        content: trimmed,
        timestamp: new Date(),
      };

      const assistantMsgId = (Date.now() + 1).toString();
      const assistantMsg: Message = {
        id: assistantMsgId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
        streaming: true,
      };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setLoading(true);

      if (!open) {
        setUnread((count) => count + 1);
      }

      const history = [...messages, userMsg].map((message) => ({
        role: message.role,
        content: message.content,
      }));

      try {
        abortRef.current = new AbortController();

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: abortRef.current.signal,
        });

        if (!response.ok) {
          throw new Error("API error");
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("No stream");
        }

        const decoder = new TextDecoder();
        let fullText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((line) => line.startsWith("data: "));

          for (const line of lines) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.text) {
                fullText += data.text;
                setMessages((prev) =>
                  prev.map((message) =>
                    message.id === assistantMsgId ? { ...message, content: fullText, streaming: true } : message
                  )
                );
              }
            } catch {
              // Ignore partial event payloads.
            }
          }
        }

        setMessages((prev) =>
          prev.map((message) => (message.id === assistantMsgId ? { ...message, streaming: false } : message))
        );
      } catch (error: unknown) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantMsgId
              ? {
                  ...message,
                  content:
                    "Sorry, something went wrong. Please email us at **contact@fluxmediacreations.com** or WhatsApp **+91 6284957892**.",
                  streaming: false,
                }
              : message
          )
        );
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    [loading, messages, open]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const stopStreaming = () => {
    abortRef.current?.abort();
    setLoading(false);
    setMessages((prev) => prev.map((message) => (message.streaming ? { ...message, streaming: false } : message)));
  };

  const clearChat = () => {
    setMessages([{ id: "0", role: "assistant", content: GREETING, timestamp: new Date() }]);
    setShowQuick(true);
  };

  const chatWidth = expanded ? "min(700px, 95vw)" : "min(420px, 95vw)";
  const chatHeight = expanded ? "min(700px, 90vh)" : "min(600px, 80vh)";

  return (
    <>
      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 92, 53, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(255, 92, 53, 0); }
        }
        .chat-content p { margin-bottom: 0.6em; }
        .chat-content p:last-child { margin-bottom: 0; }
        .chat-content ul { margin: 0.4em 0 0.6em 1.2em; }
        .chat-content li { margin-bottom: 0.2em; list-style: disc; }
        .chat-content strong { font-weight: 600; }
        .chat-content code {
          background: rgba(13, 13, 13, 0.07);
          padding: 1px 5px;
          border-radius: 4px;
          font-size: 0.85em;
          font-family: monospace;
        }
        .chat-content h2,
        .chat-content h3 {
          font-weight: 600;
          margin: 0.5em 0 0.3em;
          font-family: "Clash Display", sans-serif;
        }
        .chat-scroll::-webkit-scrollbar { width: 4px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb {
          background: rgba(13, 13, 13, 0.12);
          border-radius: 2px;
        }
        .chat-input-area::-webkit-scrollbar { display: none; }
        .chat-fab-pulse { animation: chatPulse 2s ease-in-out infinite; }
      `}</style>

      <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="cursor-pointer select-none rounded-full px-3.5 py-2 text-xs font-medium shadow-lg"
              style={{
                background: "var(--ink)",
                color: "#FAF8F4",
                fontFamily: "Satoshi, sans-serif",
                whiteSpace: "nowrap",
              }}
              onClick={() => setOpen(true)}
            >
              Chat with us
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((isOpen) => !isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="chat-fab-pulse relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
          style={{ background: "var(--flux)", color: "white" }}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="select-none text-xl leading-none"
              >
                x
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl leading-none"
              >
                ?
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {unread > 0 && !open && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "#DC2626" }}
              >
                {unread}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 z-[9997] flex flex-col overflow-hidden md:right-6"
            style={{
              width: chatWidth,
              height: chatHeight,
              background: "var(--cream, #FAF8F4)",
              borderRadius: "20px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 4px 20px rgba(0,0,0,0.1)",
              border: "1px solid rgba(13,13,13,0.08)",
              transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div
              className="flex flex-shrink-0 items-center justify-between px-4 py-3.5"
              style={{ background: "var(--ink, #0D0D0D)", borderRadius: "20px 20px 0 0" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      background: "var(--flux, #FF5C35)",
                      color: "white",
                      fontFamily: "Clash Display, sans-serif",
                    }}
                  >
                    F
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
                    style={{ background: "#22C55E", borderColor: "var(--ink)" }}
                  />
                </div>

                <div>
                  <div
                    className="text-sm font-semibold leading-tight"
                    style={{
                      color: "#FAF8F4",
                      fontFamily: "Clash Display, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Flux Assistant
                  </div>
                  <div className="text-xs" style={{ color: "rgba(250,248,244,0.45)" }}>
                    {loading ? (
                      <span className="flex items-center gap-1.5">
                        <span className="inline-block h-1 w-1 rounded-full bg-green-400 animate-pulse" />
                        Typing...
                      </span>
                    ) : (
                      "Online · Usually replies instantly"
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setExpanded((value) => !value)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 hover:bg-white/10"
                  style={{ color: "rgba(250,248,244,0.5)" }}
                  title={expanded ? "Compact" : "Expand"}
                >
                  {expanded ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M9 1H13M13 1V5M13 1L8 6M5 13H1M1 13V9M1 13L6 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 5V1M1 1H5M1 1L6 6M13 9V13M13 13H9M13 13L8 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>

                <button
                  onClick={clearChat}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 hover:bg-white/10"
                  style={{ color: "rgba(250,248,244,0.5)" }}
                  title="New chat"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M1 6.5C1 3.46 3.46 1 6.5 1C8.5 1 10.24 2.05 11.2 3.63M12 6.5C12 9.54 9.54 12 6.5 12C4.5 12 2.76 10.95 1.8 9.37"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 3.63L11.2 3.63L11.2 1.43"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 9.37L1.8 9.37L1.8 11.57"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 hover:bg-white/10"
                  style={{ color: "rgba(250,248,244,0.5)" }}
                  title="Close"
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1 1L10 10M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="chat-scroll flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4" style={{ background: "#F7F5F1" }}>
              {messages.map((message) => (
                <MessageBubble key={message.id} msg={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            <AnimatePresence>
              {showQuick && messages.length <= 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 px-4 py-3" style={{ borderTop: "1px solid rgba(13,13,13,0.06)" }}>
                    {QUICK_PROMPTS.map((prompt) => (
                      <button
                        key={prompt.text}
                        onClick={() => sendMessage(prompt.text)}
                        className="rounded-full px-3 py-1.5 text-xs transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{
                          border: "1px solid rgba(13,13,13,0.12)",
                          background: "white",
                          color: "var(--ink, #0D0D0D)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        {prompt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              className="flex-shrink-0 px-3 pb-3 pt-2"
              style={{ background: "var(--cream, #FAF8F4)", borderTop: "1px solid rgba(13,13,13,0.07)" }}
            >
              <div
                className="flex items-end gap-2 rounded-2xl px-4 py-2.5"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(13,13,13,0.1)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about our services..."
                  rows={1}
                  className="chat-input-area flex-1 resize-none bg-transparent text-sm leading-relaxed outline-none"
                  style={{
                    color: "var(--ink, #0D0D0D)",
                    fontFamily: "Satoshi, sans-serif",
                    maxHeight: "120px",
                    minHeight: "20px",
                  }}
                />

                <motion.button
                  onClick={loading ? stopStreaming : () => sendMessage(input)}
                  whileTap={{ scale: 0.9 }}
                  disabled={!loading && !input.trim()}
                  className="mb-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200"
                  style={{
                    background: loading || input.trim() ? "var(--flux, #FF5C35)" : "rgba(13,13,13,0.08)",
                    color: loading || input.trim() ? "white" : "rgba(13,13,13,0.3)",
                  }}
                  aria-label={loading ? "Stop" : "Send"}
                >
                  {loading ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <rect x="2" y="2" width="3" height="8" rx="1" />
                      <rect x="7" y="2" width="3" height="8" rx="1" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 11V3M7 3L3 7M7 3L11 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>

              <div className="mt-2 text-center">
                <span className="text-xs" style={{ color: "rgba(13,13,13,0.28)", fontFamily: "Satoshi, sans-serif" }}>
                  Powered by{" "}
                  <a
                    href="https://fluxmediacreations.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold transition-colors hover:text-flux"
                    style={{ color: "var(--flux, #FF5C35)" }}
                  >
                    Flux Media Creations
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
