import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "fluxmediacreations.com";

function isLocalHost(host: string) {
  return host.startsWith("localhost") || host.startsWith("127.0.0.1");
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const hostname = host.split(":")[0];
  const protocol = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
  const isBookACall = url.pathname === "/book-a-call" || url.pathname.startsWith("/book-a-call/");
  const shouldCanonicalizeHost = hostname === `www.${CANONICAL_HOST}`;
  const shouldCanonicalizeProtocol = hostname === CANONICAL_HOST && protocol === "http";

  if (isLocalHost(hostname) && !isBookACall) {
    return NextResponse.next();
  }

  if (isBookACall || shouldCanonicalizeHost || shouldCanonicalizeProtocol) {
    if (!isLocalHost(hostname)) {
      url.protocol = "https";
      url.hostname = CANONICAL_HOST;
      url.port = "";
    }

    if (isBookACall) {
      url.pathname = "/contact";
      url.search = "";
    }

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
