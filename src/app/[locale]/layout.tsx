import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Цагаан Тана - Уламжлалт Анагаах Ухааны Эмнэлэг",
  description: "Монголын уламжлалт анагаах ухаан, бариа засал, зүү тавих, биеийн тамир зөвлөгөө",
};

export function generateStaticParams() {
  return [{ locale: "mn" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
