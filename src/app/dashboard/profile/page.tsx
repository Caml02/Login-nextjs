"use client";
import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {

    const { data: session, status } = useSession()
    console.log( session, status);
    return (
        <div className="justify-center h-[calc(100vh-4rem)] flex flex-col items-center gap-y-5">
            <div className="flex font-sans bg-white p-5">
                <div className="flex-none w-56 relative">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lense.fr%2Fwp-content%2Fuploads%2F2019%2F09%2F100k-ai-faces-4.jpg&f=1&nofb=1&ipt=113068dde78bc38c2a0db46debc2fa33bf8472e52755f9ad3ede68cba52c0aa9&ipo=images"
                     alt="img-profile" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                </div>
                <form className="flex-auto p-10 ">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto font-medium text-slate-900">
                            {session ? (session.user ? session.user.fullname : "Nombre predeterminado si no hay usuario") : "Nombre predeterminado si no hay sesión"}
                        </h1>
                            <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                                Nu Bank
                            </div>
                            <div className="text-sm font-medium text-slate-400">
                                Employee
                            </div>
                    </div>
                        <p className="text-sm text-slate-500">
                        Supervisor At NuBank
                        </p>
                </form>
            </div>
                <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"  onClick={() => {
                        signOut();
                    }} >
                        Logout
                </button>
        </div>
    );
}



