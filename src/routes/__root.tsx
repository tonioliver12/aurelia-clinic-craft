import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-ivory grid place-items-center px-6 pt-32 pb-20">
      <div className="max-w-lg text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-serif mt-6 text-5xl md:text-6xl text-ink">This page can't be found.</h1>
        <p className="mt-6 text-ink/70 leading-relaxed">
          The page you're looking for may have moved. You can return home or browse our treatments.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">Go home</Link>
          <Link to="/treatments" className="btn-ghost">View treatments</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-ivory grid place-items-center px-6 py-24">
      <div className="max-w-lg text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="display-serif mt-6 text-4xl md:text-5xl text-ink">This page didn't load.</h1>
        <p className="mt-4 text-ink/70">You can try again or head back home.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aurelia Dental — Private dentistry in Dublin 4" },
      {
        name: "description",
        content:
          "Aurelia Dental is a modern private dental practice in Dublin 4. Considered clinical care, natural-looking results and a calmer kind of patient experience.",
      },
      { name: "author", content: "Aurelia Dental" },
      { name: "theme-color", content: "#F6F1E8" },
      { property: "og:site_name", content: "Aurelia Dental" },
      { property: "og:title", content: "Aurelia Dental — Private dentistry in Dublin 4" },
      { property: "og:description", content: "Advanced dental care, natural-looking results and a calmer kind of patient experience in the heart of Dublin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Aurelia Dental",
          description:
            "Private dental practice in Dublin 4 specialising in Invisalign, composite bonding, dental implants and cosmetic dentistry.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "18 Pembroke Lane",
            addressLocality: "Dublin",
            addressRegion: "Dublin 4",
            postalCode: "D04 A1B2",
            addressCountry: "IE",
          },
          telephone: "+353-1-555-0184",
          email: "hello@aureliadental.ie",
          priceRange: "€€€",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "350",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-ivory text-ink">
        <SiteHeader />
        <main id="main" className="flex-1 pb-24 lg:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
        <StickyMobileCTA />
      </div>
    </QueryClientProvider>
  );
}
