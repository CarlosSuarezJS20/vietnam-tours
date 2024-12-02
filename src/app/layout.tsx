import "./globals.css"; //global css
import { inter } from "./ui/fonts";
import NavBar from "./ui/components/navbar";

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
    <html lang='en' className='min-w-80'>
      <body className={`${inter.className} antialised h-full`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
