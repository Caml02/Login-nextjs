"use client";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";


function LoginPage () {

    const [error, setError] = useState();
    const router = useRouter();
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData (e.currentTarget);
        const res = await signIn('credentials', {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        
        if (res?.ok) return router.push("/dashboard");
        console.log(error);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}            
            <h1 className="text-3xl font-bold my-2"> Sign In</h1>

            <input type="email"
            placeholder="Email" 
            name="email"
            className="bg-zinc-800 px-4 py-2 block mb-2"/>

            <input type="password"
            placeholder="password" 
            name="password"
            className="bg-zinc-800 px-4 py-2 block mb-2"/>

            <button className="bg-indigo-500 px-4 py-2 mb-2">
                Log In
            </button>
        </form>
    );
}

export default LoginPage;