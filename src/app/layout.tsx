import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/twMerge";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "DT Money",
  description: "Billing money through activity registrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "bg-gray-200/80")}>
        {children}
      </body>
    </html>
  );
}
