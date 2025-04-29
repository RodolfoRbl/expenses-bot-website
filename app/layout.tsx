import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Enhanced metadata
export const metadata: Metadata = {
  title: "SpendTracker | Simple Expense Tracking Telegram Bot",
  description: "Track your daily expenses effortlessly with SpendTracker, a user-friendly Telegram bot. Get insights, set budgets, and take control of your finances.",
  keywords: ["expense tracker", "telegram bot", "finance", "budget", "personal finance", "money management"],
  authors: [{ name: "SpendTracker Team" }],
  openGraph: {
    type: "website",
    title: "SpendTracker | Simple Expense Tracking Telegram Bot",
    description: "Track your daily expenses effortlessly with SpendTracker, a user-friendly Telegram bot.",
    url: "https://spendtracker.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpendTracker | Simple Expense Tracking Telegram Bot",
    description: "Track your daily expenses effortlessly with SpendTracker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
