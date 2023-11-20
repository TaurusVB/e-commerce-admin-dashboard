import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import ModalProvider from "@/providers/modalProvider";
import ToasterProvider from "@/providers/toastProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce ADMIN-DASHBOARD",
  description: "E-commerce ADMIN-DASHBOARD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
