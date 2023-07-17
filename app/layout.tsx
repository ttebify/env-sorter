import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

type RootLayoutProps = { children: React.ReactNode };

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Environment Variables Sorter",
  description: "Your environment variables should be as clean as your code.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
