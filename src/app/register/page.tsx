"use client";
import axios, { AxiosError} from "axios";
import React, { FormEvent, useState } from "react";

function RegisterPage () {

    const [error, setError] = useState();
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData (e.currentTarget)
        
        try {
        
        const res = await axios.post('api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('fullname'),
        });
        console.log(res);

        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                setError(error.response ?.data.message);
                console.log("Error message:", error.response ?.data.message);

            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <h1 className="text-3xl font-bold my-2"> Sign Up</h1>

            <input type="text"
            placeholder="Name" 
            name="fullname"
            className="bg-zinc-800 px-4 py-2 block mb-2"/>

            <input type="email"
            placeholder="Email" 
            name="email"
            className="bg-zinc-800 px-4 py-2 block mb-2"/>

            <input type="password"
            placeholder="password" 
            name="password"
            className="bg-zinc-800 px-4 py-2 block mb-2"/>

            <button className="bg-indigo-500 px-4 py-2 mb-2">
                Register
            </button>
            {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        </form>
    )
}

export default RegisterPage;