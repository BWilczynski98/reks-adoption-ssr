import { ThemeProvider } from "@/components/ui/theme-provider";
import dayjs from "dayjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

require("dayjs/locale/pl");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.locale("pl");
dayjs.extend(relativeTime);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reks Malbork - stowarzyszenie przyjaciół zwierząt",
  description: "Oficjalna strona Malborskiego Stowarzyszenia Przyjaciół zwierząt REKS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
