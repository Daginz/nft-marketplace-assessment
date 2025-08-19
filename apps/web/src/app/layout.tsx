import type { Metadata } from "next";
import { RootLayout as UiShell } from "ui";

export const metadata: Metadata = {
  title: { template: "%s | NFT Marketplace", default: "NFT Marketplace" },
  description:
    "Exploring Modern Web Development: An NFT Marketplace with Turborepo, Next.js, TailwindCSS, NestJS, and More…",
  keywords: [
    "Next.js","React","JavaScript","TypeScript","NestJS","TailwindCSS","TurboRepo","Monorepo",
  ],
  openGraph: {
    title: "NFT Marketplace",
    description:
      "Exploring Modern Web Development: An NFT Marketplace with Turborepo, Next.js, TailwindCSS, NestJS, and More…",
    siteName: "NFT Marketplace",
    images: `${process.env.IMG_URL ?? "http://localhost:3002/images"}/monkey-driving.webp`,
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground">
        <UiShell>{children}</UiShell>
        {modal}
      </body>
    </html>
  );
}
