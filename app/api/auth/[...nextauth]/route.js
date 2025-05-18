// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// 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 secret
// 1055415313463-5vo4579r09507l970i8rve3n9jp9e9tj.apps.googleusercontent.com id
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:"1055415313463-5vo4579r09507l970i8rve3n9jp9e9tj.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    signIn: "/Login", // your custom login page
    error: "/error",    // redirect to error page on error
  },
    secret: process.env.NEXTAUTH_SECRET,

  // optionally, callbacks, database, session config, etc.
});

export { handler as GET, handler as POST };
