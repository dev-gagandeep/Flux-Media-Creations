"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, m } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  streaming?: boolean;
  bookingUrl?: string;
}

const QUICK_PROMPTS = [
  { emoji: "💰", label: "Pricing", text: "What are your prices for a website?" },
  { emoji: "⚡", label: "How fast?", text: "How quickly can you deliver?" },
  { emoji: "🔧", label: "GHL setup", text: "Can you set up GoHighLevel for my business?" },
  { emoji: "🏥", label: "Healthcare", text: "Do you work with healthcare clinics?" },
  { emoji: "🌍", label: "Your work", text: "Show me some websites you've built" },
];

const GREETING = `Hey! I'm **Flux** - the assistant for **Flux Media Creations**.

I can help you with:
- Services and pricing
- How we build websites and automations
- Portfolio examples
- Getting a quote
- Contacting the team

What would you like to know?`;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderMd(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /`(.+?)`/g,
      '<code style="background:rgba(13,13,13,0.07);padding:1px 5px;border-radius:4px;font-size:0.88em;font-family:monospace">$1</code>'
    )
    .replace(
      /(?<![@\w/])((?:https?:\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[a-z0-9._~:/?#[\]@!$&'()*+,;=%-]*)?)/gi,
      (match) => {
        const normalized = match.replace(/^https?:\/\//, "").replace(/^www\./, "");
        const href = normalized.startsWith("fluxmediacreations.com")
          ? normalized.replace("fluxmediacreations.com", "") || "/"
          : `https://${normalized}`;
        const label = normalized.startsWith("fluxmediacreations.com/")
          ? normalized.replace("fluxmediacreations.com", "").replace("/", "").replace(/-/g, " ") || "homepage"
          : normalized;

        return `<a class="flux-chat-link" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${label}</a>`;
      }
    )
    .replace(
      /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi,
      '<a class="flux-chat-text-link" href="mailto:$1">$1</a>'
    )
    .replace(
      /(\+91\s?6284957892)/g,
      (match) => `<a class="flux-chat-text-link" href="tel:${match.replace(/\s+/g, "")}">${match}</a>`
    )
    .replace(/^### (.+)$/gm, '<p style="font-weight:700;margin:8px 0 3px;font-family:Cabinet Grotesk,sans-serif">$1</p>')
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul style="margin:6px 0 6px 16px;display:flex;flex-direction:column;gap:3px">${match}</ul>`)
    .replace(/\n\n/g, '<div style="height:8px"></div>')
    .replace(/\n/g, "<br/>");
}

function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "flex", gap: 10, flexDirection: isUser ? "row-reverse" : "row", alignItems: "flex-end" }}
    >
      {!isUser && (
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "#CF3723",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 12,
            color: "white",
            flexShrink: 0,
            fontFamily: "Cabinet Grotesk, sans-serif",
            marginBottom: 2,
          }}
        >
          F
        </div>
      )}

      <div
        style={{
          maxWidth: "82%",
          padding: "10px 14px",
          borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          fontSize: 13.5,
          lineHeight: 1.6,
          background: isUser ? "#06070A" : "white",
          color: isUser ? "#F3F4F1" : "#06070A",
          border: isUser ? "none" : "1px solid rgba(13,13,13,0.08)",
          boxShadow: isUser ? "none" : "0 1px 8px rgba(0,0,0,0.07)",
        }}
      >
        {msg.streaming && msg.content === "" ? (
          <div style={{ display: "flex", gap: 5, padding: "3px 0" }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#CF3723",
                  display: "block",
                  animation: `fluxDot 1.2s ease-in-out ${i * 0.18}s infinite`,
                }}
              />
            ))}
          </div>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: renderMd(msg.content) }} />
            {msg.streaming && (
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: 14,
                  background: "#CF3723",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  animation: "fluxCursor 0.8s ease-in-out infinite",
                }}
              />
            )}
            {msg.bookingUrl ? (
              <div
                style={{
                  marginTop: msg.content ? 10 : 0,
                  padding: 12,
                  borderRadius: 12,
                  background: "#F4F2EE",
                  border: "1px solid rgba(13,13,13,0.08)",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>Book a free 30-minute call</div>
                <div style={{ fontSize: 12, color: "rgba(6,7,10,0.58)", marginBottom: 10 }}>
                  Choose a time that works for you directly in Calendly.
                </div>
                <a
                  href={msg.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 36,
                    padding: "0 14px",
                    borderRadius: 10,
                    background: "#CF3723",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Book a time →
                </a>
              </div>
            ) : null}
          </>
        )}
      </div>
    </m.div>
  );
}

export default function FluxChat() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([
    { id: "0", role: "assistant", content: GREETING, timestamp: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [unread, setUnread] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sessionIdRef = useRef("");

  useEffect(() => {
    const stored = sessionStorage.getItem("flux-chat-session");
    const sessionId = stored || crypto.randomUUID();
    sessionStorage.setItem("flux-chat-session", sessionId);
    sessionIdRef.current = sessionId;
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const syncMobile = () => setIsMobile(media.matches);

    syncMobile();
    media.addEventListener("change", syncMobile);
    return () => media.removeEventListener("change", syncMobile);
  }, []);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [msgs, open]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      window.setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

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

      const userMsg: Message = { id: `u${Date.now()}`, role: "user", content: trimmed, timestamp: new Date() };
      const assistantMsgId = `a${Date.now() + 1}`;
      const assistantMsg: Message = { id: assistantMsgId, role: "assistant", content: "", timestamp: new Date(), streaming: true };

      setMsgs((prev) => [...prev, userMsg, assistantMsg]);
      setLoading(true);

      if (!open) {
        setUnread((count) => count + 1);
      }

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: sessionIdRef.current || crypto.randomUUID(),
            messages: [...msgs, userMsg].map(({ role, content }) => ({ role, content })),
          }),
        });

        if (!response.body) throw new Error("Chat stream unavailable");
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.trim()) continue;
            const event = JSON.parse(line) as {
              type: "text" | "booking" | "lead_submitted";
              content?: string;
              url?: string;
            };

            if (event.type === "text" && event.content) {
              setMsgs((prev) =>
                prev.map((message) =>
                  message.id === assistantMsgId
                    ? { ...message, content: message.content + event.content }
                    : message
                )
              );
            }

            if (event.type === "booking" && event.url) {
              setMsgs((prev) =>
                prev.map((message) =>
                  message.id === assistantMsgId
                    ? {
                        ...message,
                        content: message.content || "Absolutely — choose a convenient time below.",
                        bookingUrl: event.url,
                      }
                    : message
                )
              );
            }

            if (event.type === "lead_submitted") {
              sessionStorage.setItem("flux-chat-lead-submitted", "true");
            }
          }
        }
      } catch (error) {
        console.error("Flux chat error:", error);
        setMsgs((prev) =>
          prev.map((message) =>
            message.id === assistantMsgId
              ? {
                  ...message,
                  content:
                    "I couldn’t connect just now. Please email contact@fluxmediacreations.com or WhatsApp +91 6284957892.",
                }
              : message
          )
        );
      } finally {
        setMsgs((prev) =>
          prev.map((message) =>
            message.id === assistantMsgId ? { ...message, streaming: false } : message
          )
        );
        setLoading(false);
      }
    },
    [loading, msgs, open]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMsgs([{ id: "0", role: "assistant", content: GREETING, timestamp: new Date() }]);
    setShowQuick(true);
    setLoading(false);
  };

  const chatWidth = expanded ? "min(680px, 96vw)" : "min(400px, 96vw)";
  const chatHeight = expanded ? "min(680px, 88vh)" : "min(580px, 82vh)";
  const launcherBottom = isMobile ? 126 : 24;
  const launcherRight = isMobile ? 16 : 24;
  const panelBottom = isMobile ? 154 : 90;

  return (
    <>
      <style>{`
        @keyframes fluxDot {
          0%,80%,100% { transform:scale(0.6); opacity:0.35; }
          40% { transform:scale(1); opacity:1; }
        }
        @keyframes fluxCursor {
          0%,100% { opacity:1; }
          50% { opacity:0; }
        }
        @keyframes fluxPulse {
          0%,100% { box-shadow:0 4px 20px rgba(207,55,35,0.38); }
          50% { box-shadow:0 4px 20px rgba(207,55,35,0.38),0 0 0 10px rgba(207,55,35,0.08); }
        }
        .flux-scroll::-webkit-scrollbar { width:3px; }
        .flux-scroll::-webkit-scrollbar-thumb { background:rgba(13,13,13,0.1); border-radius:2px; }
        .flux-scroll::-webkit-scrollbar-track { background:transparent; }
        .flux-ta { scrollbar-width:none; }
        .flux-ta::-webkit-scrollbar { display:none; }
        .flux-qbtn {
          font-size:11.5px;
          padding:5px 11px;
          border-radius:100px;
          border:1px solid rgba(13,13,13,0.11);
          background:white;
          color:#06070A;
          cursor:pointer;
          font-family:Satoshi,Inter,sans-serif;
          transition:all 0.15s;
          white-space:nowrap;
        }
        .flux-qbtn:hover { border-color:#CF3723; color:#CF3723; transform:translateY(-1px); }
        .flux-hbtn {
          width:30px;
          height:30px;
          border-radius:8px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          color:rgba(250,248,244,0.45);
          background:transparent;
          border:none;
          transition:background 0.15s;
          flex-shrink:0;
        }
        .flux-hbtn:hover { background:rgba(255,255,255,0.1); }
        .flux-send:hover { opacity:0.88; }
        .flux-send:active { transform:scale(0.9); }
        .flux-fab:hover { transform:scale(1.08); }
        .flux-fab:active { transform:scale(0.93); }
        .flux-chat-link {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          margin:4px 4px 2px 0;
          padding:5px 9px;
          border-radius:8px;
          background:#CF3723;
          color:white !important;
          font-size:12px;
          font-weight:600;
          text-decoration:none;
          text-transform:capitalize;
        }
        .flux-chat-text-link {
          color:#CF3723 !important;
          font-weight:700;
          text-decoration:underline;
          text-underline-offset:2px;
        }
      `}</style>

      <div style={{ position: "fixed", bottom: launcherBottom, right: launcherRight, zIndex: 9998, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <AnimatePresence>
          {!open && (
            <m.button
              type="button"
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ delay: 1.8, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "#06070A",
                color: "#F3F4F1",
                fontSize: 12.5,
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: 100,
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "Satoshi, Inter, sans-serif",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
              onClick={() => setOpen(true)}
            >
              💬 Chat with us
            </m.button>
          )}
        </AnimatePresence>

        <button
          type="button"
          aria-label={open ? "Close chat" : "Open chat"}
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="flux-fab"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#CF3723",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            position: "relative",
            animation: "fluxPulse 2.5s ease-in-out infinite",
            transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)",
            boxShadow: "0 4px 20px rgba(207,55,35,0.38)",
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <m.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ fontSize: 18, color: "white", lineHeight: 1, fontWeight: 300 }}
              >
                ✕
              </m.span>
            ) : (
              <m.span
                key="c"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ fontSize: 24, lineHeight: 1 }}
              >
                💬
              </m.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {unread > 0 && !open && (
              <m.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{ background: "#DC2626" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -4,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#DC2626",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {unread}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            key="chat"
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              bottom: panelBottom,
              right: 16,
              width: chatWidth,
              height: chatHeight,
              background: "#F3F4F1",
              borderRadius: "20px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 4px 20px rgba(0,0,0,0.1)",
              border: "1px solid rgba(13,13,13,0.08)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 9997,
              transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div style={{ background: "#06070A", padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#CF3723",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "white",
                      fontFamily: "Cabinet Grotesk, sans-serif",
                    }}
                  >
                    F
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      bottom: -1,
                      right: -1,
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: "#22C55E",
                      border: "2px solid #06070A",
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#F3F4F1",
                      fontFamily: "Cabinet Grotesk, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Flux Assistant
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(250,248,244,0.42)", display: "flex", alignItems: "center", gap: 5 }}>
                    {loading ? (
                      <>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block", animation: "fluxDot 1.2s ease-in-out infinite" }} />
                        Typing...
                      </>
                    ) : (
                      "Online · Usually replies instantly"
                    )}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
                <button
                  type="button"
                  aria-label={expanded ? "Use compact chat window" : "Expand chat window"}
                  onClick={() => setExpanded((value) => !value)}
                  className="flux-hbtn"
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
                  type="button"
                  aria-label="Start a new chat"
                  onClick={clearChat}
                  className="flux-hbtn"
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
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="flux-hbtn"
                  title="Close"
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1 1L10 10M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flux-scroll" style={{ flex: 1, overflowY: "auto", padding: "14px 14px", display: "flex", flexDirection: "column", gap: 12, background: "#F4F2EE" }}>
              {msgs.map((message) => (
                <Bubble key={message.id} msg={message} />
              ))}
              <div ref={endRef} />
            </div>

            <AnimatePresence>
              {showQuick && msgs.length <= 2 && (
                <m.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(6,7,10,0.06)", display: "flex", flexWrap: "wrap", gap: 7, background: "#F3F4F1" }}>
                    {QUICK_PROMPTS.map((prompt) => (
                      <button
                        type="button"
                        key={prompt.text}
                        onClick={() => sendMessage(prompt.text)}
                        className="flux-qbtn"
                      >
                        {prompt.emoji} {prompt.label}
                      </button>
                    ))}
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            <div
              style={{ padding: "10px 12px 10px", background: "#F3F4F1", borderTop: "1px solid rgba(6,7,10,0.07)", flexShrink: 0 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 8,
                  background: "white",
                  border: "1.5px solid rgba(13,13,13,0.1)",
                  borderRadius: 16,
                  padding: "9px 10px 9px 14px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <label htmlFor="flux-chat-message" className="sr-only">Message Flux</label>
                <textarea
                  id="flux-chat-message"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${Math.min(e.target.scrollHeight, 110)}px`;
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about our services..."
                  rows={1}
                  className="flux-ta"
                  style={{
                    flex: 1,
                    resize: "none",
                    outline: "2px solid transparent",
                    border: "none",
                    background: "transparent",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "#06070A",
                    fontFamily: "Satoshi, Inter, sans-serif",
                    maxHeight: 110,
                  }}
                />

                <button
                  type="button"
                  aria-label="Send message"
                  className="flux-send"
                  onClick={() => sendMessage(input)}
                  disabled={!loading && !input.trim()}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    border: "none",
                    cursor: loading || input.trim() ? "pointer" : "default",
                    background: loading || input.trim() ? "#CF3723" : "rgba(6,7,10,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginBottom: 1,
                    transition: "background 0.2s, transform 0.15s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={input.trim() ? "white" : "rgba(13,13,13,0.3)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 11V3M7 3L3 7M7 3L11 7" />
                  </svg>
                </button>
              </div>

              <div style={{ textAlign: "center", marginTop: 7, fontSize: 12, color: "rgba(13,13,13,0.28)", fontFamily: "Satoshi, Inter, sans-serif" }}>
                <span>
                  Powered by{" "}
                  <a
                    href="https://fluxmediacreations.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#CF3723", fontWeight: 600, textDecoration: "none" }}
                  >
                    Flux Media Creations
                  </a>
                </span>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
