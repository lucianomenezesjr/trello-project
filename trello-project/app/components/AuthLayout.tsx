
interface AuthLayoutProps {
  children: React.ReactNode; 
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-start">
      {/* Lado esquerdo com logo */}
      <div className="w-1/2 h-screen flex-col bg-[#031926] flex items-center justify-center">
        <h1
          className=" text-white text-9xl mb-2"
        >
          TRELLO
        </h1>
        <hr className="w-1/3 border-white" />
      </div>

      
      <div className="w-1/2 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
