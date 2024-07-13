import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import ConvexClientProvider from "@/components/providers/convex-provider";
import ModalProvider from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azmotion",
  description: "This app is Notion clorn",
  icons: {
    icon: [
      {
        media: "(prefers-color-schema: light)",
        url: "/next.svg",
        href: "/next.svg",
      },
      {
        media: "(prefers-color-schema: dark)",
        url: "/vercel.svg",
        href: "/vercel.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="azmotion-theme"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
