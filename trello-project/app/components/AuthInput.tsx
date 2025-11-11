interface AuthInputProps{
    label: string,
    placeholder: string
}


export default function AuthInput({ label, placeholder }: AuthInputProps){
    
    
    return(
        <div className="w-2/4 flex flex-col gap-2 justify-center mt-2">
            <label htmlFor="Email" className="text-2xl pl-2">{label}</label>
            <input 
                type="text" 
                placeholder={placeholder} 
                className="border rounded-md p-2 h-[5vh] border-black"
            />
        </div>
    )
}