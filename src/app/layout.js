import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToHash from "@/components/scroll-to-hash";
import PageBackground from "@/components/page-background";
import KeyboardHint from "@/components/keyboard-hint";
import { Analytics } from "@vercel/analytics/next";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mehbub — Portfolio",
  description: "Mehbub — FSE @ House of EdTech, GSoC '26 @ UC OSPO. Building with Next.js, Node.js, PostgreSQL, Redis, and AWS. Kolkata, India.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.className} antialiased`}
    >
      <body className="relative min-h-dvh">
        <PageBackground />
        <ThemeProvider>
          <TooltipProvider delayDuration={0}>
            <Navbar />

            <div>
              {children}
            </div>

            <Footer />
            <KeyboardHint />
          </TooltipProvider>
        </ThemeProvider>
        <ScrollToHash />
        <Analytics />
      </body>
    </html>
  );
}