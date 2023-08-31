import React from "react";

function RegisterPage () {
    return (
        <form>
            <h1 className="text-3xl font-bold my-2"> Sign UP</h1>

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

        </form>
    )
}

export default RegisterPage;