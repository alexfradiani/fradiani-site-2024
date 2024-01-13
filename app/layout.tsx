import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const promptFont = Prompt({ weight: ["500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fradiani Portal",
  description: "Alexander Fradiani (Alex Frad) Site Picker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
      </head>
      <body className={promptFont.className}>{children}</body>
    </html>
  );
}
