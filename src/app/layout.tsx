import { safeJsonLd } from "@/lib/json-ld";
import "./globals.css";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import { generateMeta, schemaOrganization, schemaWebsite } from "@/lib/seo";
import ChatbotWrapper from "@/components/chatbot/ChatbotWrapper";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import RouteSchemas from "@/components/seo/RouteSchemas";
import MotionProvider from "@/components/ui/MotionProvider";
import Script from "next/script";

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
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaOrganization) }}
        />
      </head>
      <body className="bg-cream text-ink overflow-x-hidden">
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xqtb6kfps5");
          `}
        </Script>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBQFBVX8"
            sandbox=""
            referrerPolicy="no-referrer"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MotionProvider>
          <RouteSchemas />
          <RootLayoutClient>{children}</RootLayoutClient>
          <ChatbotWrapper />
        </MotionProvider>
      </body>
    </html>
  );
}
