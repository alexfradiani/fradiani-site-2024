import { type Metadata } from "next";

import { Providers } from "@/app/software/providers";
import { Layout } from "@/app/software/template-ui/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Alexander Fradiani",
    default:
      "Alexander Fradiani - Systems Engineer, Senior Fullstack Developer, Holistic Tech Leader",
  },
  description:
    "Hi there, I'm Alex. I like to define myself as a polymath, currently based in Germany. Starting 2024, I'm maintaining two separate profiles, one as author/artist (alexfrad.com) and this one, a summary of my career in software and the different roles I've had the opportunity of experiencing during the years.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
