import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/providers/AppProvider";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Cipherion",
  description: "Next Gen Encryption Platform",
  icons:{
    icon:'/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <AppProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
          <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}
