import { NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside

// const user = await authUserSession();

// export function middleware(request) {
//     if (user === undefined) {
//       if (request.nextUrl.pathname.startsWith("/users")) {
//         return NextResponse.rewrite(new URL("/", request.url));
//       }
//     } else {
//       if (request.nextUrl.pathname.startsWith("/")) {
//         return NextResponse.rewrite(new URL("/users/dashboard", request.url));
//       }
//     }
// }

export const config = {
  matcher: "/users/:path*",
};
