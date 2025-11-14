"use client"

import AuthInput from "@/app/components/AuthInput";
import AuthLayout from "@/app/components/AuthLayout";
import { jost } from "@/app/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Login(){

    const router = useRouter();
    
    return(
        <div>
            <AuthLayout>
                <div className={`w-full h-screen items-center justify-center flex flex-col gap-4 ${jost.className}`}>
                    <h1 className="text-7xl">Login</h1>
                    <AuthInput 
                        label="Email"
                        placeholder="Digite seu e-mail"
                    />

                    <AuthInput 
                        label="Senha"
                        placeholder="Digite sua senha"
                    />

                    <button 
                        className="w-2/4 h-[7vh] bg-[#3BAAEF] text-2xl hover:bg-[#3baaefda] cursor-pointer text-white font-semibold py-2 px-4 rounded-md mt-4"
                        onClick={() => {router.push('/')}}
                    >
                        Entrar
                    </button>

                    <div className="flex flex-col w-1/2 gap-2 pr-3 pt-5 items-end">

                        <div className="flex">
                            <p className="text-lg">Ainda não possui um usuário? </p>
                            <Link href="/Register" className="ml-2 text-black text-lg hover:underline">Registre-se </Link>
                        </div>

                        <div className="flex">
                            <p className="text-lg">Esqueceu sua senha? </p>
                            <Link href="/forgot-password" className="ml-2 text-black text-lg hover:underline">Esqueci minha senha</Link>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </div>
    )
}