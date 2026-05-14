import * as React from "react";

import { type Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Lithos 3D — Naturalnie na dnie. Z betonu i pasji.",
  description:
    "Innowacyjne koszyczki Method Feeder z zbrojonego betonu. Precyzja druku 3D, naturalne właściwości betonu, zero ołowiu."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" >
      <body className={bricolage.variable}>{children}</body>
    </html>
  );
}
