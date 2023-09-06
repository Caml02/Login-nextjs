"use client";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const signupResponse = await axios.post("api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      });

      console.log(signupResponse);

      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/dashboard/profile");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          // Validación de contraseña fallida
          setError("Password must be at least 8 characters long");
        } else if (error.response?.status === 409) {
          // Email ya registrado
          setError("Email already exists");
        } else {
          // Otro error
          setError("An error occurred while processing your request");
        }
      }
    }
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
      <form onSubmit={handleSubmit} className="bg-neutral-950 px-8 py-10 w-3/12">
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-3xl font-bold mb-7">Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          name="fullname"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />

        <button className="bg-indigo-500 px-4 py-2 mb-2">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
