import { safeJsonLd } from "@/lib/json-ld";
import "./globals.css";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import { generateMeta, schemaOrganization, schemaWebsite } from "@/lib/seo";
import ChatbotWrapper from "@/components/chatbot/ChatbotWrapper";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import RouteSchemas from "@/components/seo/RouteSchemas";
import MotionProvider from "@/components/ui/MotionProvider";
import CookieConsent from "@/components/layout/CookieConsent";

export const metadata = {
  ...generateMeta(),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-body">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaOrganization) }}
        />
      </head>
      <body className="bg-cream text-ink overflow-x-hidden">
        <MotionProvider>
          <RouteSchemas />
          <RootLayoutClient>{children}</RootLayoutClient>
          <ChatbotWrapper />
          <CookieConsent />
        </MotionProvider>
      </body>
    </html>
  );
}
