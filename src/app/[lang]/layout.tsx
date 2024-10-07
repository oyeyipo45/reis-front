import { Providers } from "@/app/_lib/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reisetopia Hotels",
  description: "Damilola's reisetopia Coding Challenge",
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const locale = params.lang;
  return (
    <html lang="en">
      <Providers locale={locale}>
        <body className={font.className}>{children}</body>
      </Providers>
    </html>
  );
}
