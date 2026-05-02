import "./globals.css";
import Script from "next/script";
import { generateMeta, schemaWebsite } from "@/lib/seo";
import ChatbotWrapper from "@/components/chatbot/ChatbotWrapper";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import RouteSchemas from "@/components/seo/RouteSchemas";

export const metadata = generateMeta();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-body">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S3MK5GT768" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S3MK5GT768');
          `}
        </Script>
      </head>
      <body className="bg-cream text-ink overflow-x-hidden">
        <RouteSchemas />
        <RootLayoutClient>{children}</RootLayoutClient>
        <ChatbotWrapper />
      </body>
    </html>
  );
}
