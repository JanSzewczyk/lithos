import * as React from "react";

import { type Metadata } from "next";

import { env } from "~/data/env/server";

function getBaseUrl(): string {
  if (env.VERCEL_URL) {
    return env.VERCEL_URL.startsWith("http") ? env.VERCEL_URL : `https://${env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl())
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
