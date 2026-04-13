import "./globals.css";
import { generateMeta, schemaOrganization, schemaWebsite } from "@/lib/seo";
import RootLayoutClient from "@/components/layout/RootLayoutClient";

export const metadata = generateMeta();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-body">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
      </head>
      <body className="bg-cream text-ink overflow-x-hidden">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
