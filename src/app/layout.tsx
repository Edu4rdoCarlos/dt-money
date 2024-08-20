"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/twMerge";
const queryClient = new QueryClient();

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "bg-gray-200/80")}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
