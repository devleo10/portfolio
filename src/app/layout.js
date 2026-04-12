import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToHash from "@/components/scroll-to-hash";
import PageBackground from "@/components/page-background";
import KeyboardHint from "@/components/keyboard-hint";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mehbub — Portfolio",
  description: "Full-stack engineer building scalable web apps, microservices, and clean interfaces.",
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
      </body>
    </html>
  );
}