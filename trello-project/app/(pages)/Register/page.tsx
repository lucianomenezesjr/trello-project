import AuthInput from "@/app/components/AuthInput";
import AuthLayout from "@/app/components/AuthLayout";
import ButtonAuth from "@/app/components/ButtonAuth";
import { Checkbox } from "@/components/ui/checkbox";

export default function Register(){
    return(
        <div>
            <AuthLayout>
                <div className="w-full h-screen items-center justify-center flex flex-col gap-4">
                    <h1 className="text-5xl ">Cadastro</h1>
                    <AuthInput 
                        label="Email"
                        placeholder="Digite seu e-mail"
                    />

                    <AuthInput 
                        label="CPF"
                        placeholder="Digite seu CPF"
                    />

                    <AuthInput 
                        label="Telefone"
                        placeholder="Digite seu telefone"
                    />

                    <AuthInput 
                        label="Senha"
                        placeholder="Digite sua senha"
                    />

                    <AuthInput 
                        label="Confirmar senha"
                        placeholder="Digite novamente sua senha"
                    />

                    <div className="flex items-center gap-2 px-2 py-5 rounded">
                        <Checkbox className="border-black" id="privacy" />
                        <label htmlFor="privacy" className="text-sm">
                            Eu concordo com as{" "}
                            <span className="font-semibold hover:underline cursor-pointer">
                            Políticas de Privacidade
                            </span>
                        </label>
                    </div>
                    
                    <ButtonAuth label="Registrar" />
                    <div className="mt-2">
                        <label htmlFor="privacy" className="text-lg">
                            Já tem um usuário? {" "}
                            <span className="hover:underline cursor-pointer">
                            Login
                            </span>
                        </label>
                    </div>

                    .
                </div>
            </AuthLayout>
        </div>
    )
}