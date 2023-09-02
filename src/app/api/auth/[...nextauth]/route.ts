import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: "Email", type: "text", placeholder: "jsmith"
                },
                password: {
                    label: "Password", type: "password"
                },
            }
                authorize(credentials, req) {
                const user = { id: "1", fullname: "J smith", email: "email@email.com"};

                    return user;
                },
            }),
        ],  
    });

export default { handler as GET, handler as POST };