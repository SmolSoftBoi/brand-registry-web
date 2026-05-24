import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Registry",
  description: "A source-backed registry of verified, versioned brand colour data.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
