import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { treatments, dentists } from "@/data/site";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/treatments", changefreq: "monthly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/dentists", changefreq: "monthly", priority: "0.7" },
          { path: "/smile-gallery", changefreq: "monthly", priority: "0.7" },
          { path: "/reviews", changefreq: "monthly", priority: "0.6" },
          { path: "/new-patients", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/book", changefreq: "monthly", priority: "0.9" },
        ];
        const treatmentEntries: SitemapEntry[] = treatments.map((t) => ({
          path: `/treatments/${t.slug}`, changefreq: "monthly", priority: "0.8",
        }));
        const dentistEntries: SitemapEntry[] = dentists.map((d) => ({
          path: `/dentists/${d.slug}`, changefreq: "monthly", priority: "0.6",
        }));
        const entries = [...staticEntries, ...treatmentEntries, ...dentistEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
