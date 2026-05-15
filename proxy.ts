import { type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import logger from "~/lib/logger";

import { routing } from "~/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const startTime = Date.now();
  const requestId = crypto.randomUUID();

  const requestLogger = logger.child({
    requestId,
    method: request.method,
    url: request.url,
    userAgent: request.headers.get("user-agent")
  });

  requestLogger.info("Incoming request");

  const response = intlMiddleware(request);

  response.headers.set("X-Request-ID", requestId);

  requestLogger.info({ status: response.status, duration: Date.now() - startTime }, "Request completed");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)"
  ]
};
