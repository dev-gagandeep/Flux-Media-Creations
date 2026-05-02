import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flux Media Creations",
    short_name: "Flux Media",
    description: "High-converting WordPress websites and GoHighLevel automation systems for service businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e8",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
