"use client";

import * as React from "react";

import logger from "~/lib/logger";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset(): void }) {
  React.useEffect(() => {
    logger.error(
      { error: { message: error.message, stack: error.stack, digest: error.digest } },
      "Application error occurred"
    );
  }, [error]);

  return (
    <div className="bg-cement flex min-h-screen flex-col items-center justify-center px-5">
      <div className="text-center">
        <h2 className="font-display text-ink mb-3 text-2xl font-medium tracking-tight">Coś poszło nie tak</h2>
        <p className="text-ink-muted mb-6 text-base">Wystąpił nieoczekiwany błąd. Spróbuj ponownie.</p>
        <button className="btn-primary-tw" onClick={() => reset()}>
          Spróbuj ponownie
        </button>
      </div>
    </div>
  );
}
