import { connectDB } from "@/libs/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            id: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@email.com"},
                password: { label: "Password", type: "password", placeholder: "*****"},
            },
                async authorize(credentials) {
                    await connectDB();
                    const userFound = await User.findOne({email: credentials?.email, }).select("+password");
                    if (!userFound) throw new Error("Invalid Credentials");
                    console.log(userFound)
                    const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password);
                    if (!passwordMatch) throw new Error("Invalid Credentials");
                    console.log(passwordMatch)

                    return userFound;
                },
            }),
        ],  
        callbacks: {
            jwt({account, token, user, profile, session}) {
                if (user) token.user = user;
                return token;
            },
            session({session, token}) {
                console.log(session, token);
                session.user = token.user as any;
                return session;
            },
        },
        pages: {
            signIn: "/login",
        }
    });

export { handler as GET, handler as POST };