import React from "react";

import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT_KEY,
      clientSecret: process.env.GITHUB_SECRET_KEY,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
