import "./globals.css";
import { generateMeta, schemaWebsite } from "@/lib/seo";
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
      </head>
      <body className="bg-cream text-ink overflow-x-hidden">
        <RouteSchemas />
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
