interface ButtonProps{

    label: string
    
}

export default function ButtonAuth({label}: ButtonProps){
    return(
        <div className="w-1/3 flex items-center justify-center">
            <button
                className="bg-[#3BAAEF] flex py-3 rounded-md font-semibold cursor-pointer text-white text-2xl w-full justify-center"
            >
                {label}
            </button>
        </div>
    )
}