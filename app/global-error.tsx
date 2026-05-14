"use client";

import * as React from "react";

import logger from "~/lib/logger";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset(): void }) {
  React.useEffect(() => {
    logger.error(
      { error: { message: error.message, stack: error.stack, digest: error.digest } },
      "Global error occurred"
    );
  }, [error]);

  return (
    <html lang="pl">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          background: "#F9F9F8",
          color: "#2C3033",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ textAlign: "center", padding: "0 20px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
            Krytyczny błąd aplikacji
          </h2>
          <p style={{ fontSize: 16, color: "#6B7173", margin: "0 0 24px" }}>
            Wystąpił poważny błąd. Spróbuj odświeżyć stronę.
          </p>
          <button
            onClick={() => reset()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 26px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 500,
              background: "#7EA180",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Spróbuj ponownie
          </button>
        </div>
      </body>
    </html>
  );
}
