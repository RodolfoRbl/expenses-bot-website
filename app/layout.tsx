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
  title: "Fundu | Expense Tracking Telegram Bot",
  description: "Track your daily expenses effortlessly with Fundu, a user-friendly Telegram bot. Get insights, set budgets, and take control of your finances.",
  keywords: ["expense tracker", "telegram bot", "finance", "budget", "personal finance", "money management"],
  authors: [{ name: "Fundu Team" }],
  openGraph: {
    type: "website",
    title: "Fundu | Expense Tracking Telegram Bot",
    description: "Track your daily expenses effortlessly with FUndu, a user-friendly Telegram bot.",
    url: "https://fundu.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundu | Expense Tracking Telegram Bot",
    description: "Track your daily expenses effortlessly with Fundu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
