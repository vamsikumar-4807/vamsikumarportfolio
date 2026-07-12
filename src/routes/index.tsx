import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vamsi Kumar Dusanapudi — Java Full Stack Developer" },
      { name: "description", content: "Portfolio of Vamsi Kumar Dusanapudi, aspiring Java Full Stack & Frontend Developer." },
      { property: "og:title", content: "Vamsi Kumar Dusanapudi — Portfolio" },
      { property: "og:description", content: "Java Full Stack & Frontend Developer portfolio" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});
