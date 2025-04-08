import { NextResponse } from "next/server";

const allowedOrigins = ["http://localhost:3000/"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function middleware(request) {
  const origin = request.headers.get("origin") || "http://localhost:3000/";
// console.log('====', origin)
  const isAllowedOrigin = allowedOrigins.includes(origin);

  if (!isAllowedOrigin) {
    const preflightHeaders = {
      ...{ "Access-Control-Allow-Origin": origin },
      ...corsOptions,
    };

    return NextResponse.json(
      { message: "Origin Not Allowed😯!", status: 403 },
      { headers: preflightHeaders }
    );
  }

  const allowedMethods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"];
  const method = request.method;

  if (!allowedMethods.includes(method)) {
    const preflightHeaders = {
      ...{ "Access-Control-Allow-Origin": origin },
      ...corsOptions,
    };
    return NextResponse.json(
      { message: "Method Not Allowed😯!" },
      { headers: preflightHeaders }
    );
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello from middleware");

  // Create a new response with the modified body and headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  response.headers.set("x-hello-from-middleware2", "hello from end middleware");

  return response;
}
