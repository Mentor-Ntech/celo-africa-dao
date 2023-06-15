"use client";

import { Sofia_Sans } from "next/font/google";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/Footer";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Celo Africa DAO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofiaSans.className}>
        <CacheProvider>
          <ChakraProvider>
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
