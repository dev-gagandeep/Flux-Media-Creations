import "./globals.css";
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
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NBQFBVX8');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
      </head>
      <body className="bg-cream text-ink overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBQFBVX8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <RouteSchemas />
        <RootLayoutClient>{children}</RootLayoutClient>
        <ChatbotWrapper />
      </body>
    </html>
  );
}
