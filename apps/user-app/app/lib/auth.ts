import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
// import { z } from "zod";
// import { JWT, Session } from "next-auth";
// const credentialsSchema = z.object({
//   phone: z.string().min(10, "Phone number must be 10 digits"),
//   password: z.string().min(6, "password must be atleat six characters"),
//   otp: z.string().optional(),
// });

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone Number",
          type: "text",
          placeholder: "1234567890",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials: any) {
        //todo zod and otp
        // const parseResult = credentialsSchema.safeParse(credentials);
        // if (!parseResult.success) {
        //   console.error("validation error:", parseResult.error.errors);
        //   return null;
        // }
        // if (credentials.otp) {
        //   const isOtpValid = await verifyOtp(credentials.phone, credentials.otp); // replace with actual OTP verification
        //   if (!isOtpValid) {
        //     console.error("Invalid OTP");
        //     return null;
        //   }
        // }
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const exsistingUser = await db.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });
        if (exsistingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            exsistingUser.password
          );
          if (passwordValidation) {
            return {
              id: exsistingUser.id.toString(),
              name: exsistingUser.name,
              email: exsistingUser.email,
            };
          }
          return null;
        }
        try {
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            },
          });
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    //todo remove any as a type
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
