import "./globals.css"; //global css
import { inter } from "./ui/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vietnam Tours",
  description: "Travel tours page focusing in delivery best tours in Vietnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialised`}>{children}</body>
    </html>
  );
}
