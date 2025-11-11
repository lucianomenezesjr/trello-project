"use client"

import Navbar from "@/app/components/Navbar";
import ProjectSection from "./components/ProjectSection";
import CreateProjectModal from "./components/CreateProjectModal";
import Footer from "./components/Footer";

export default function Home(){
    return(
        <div className="flex flex-col">
            <Navbar />

            <div className="flex items-center justify-center bg-[#00263D] ">
                <h1 className="text-4xl py-4  text-white">Projetos</h1>
            </div>

            <div className="w-screen flex justify-center">
                <div className="flex flex-col w-1/2 items-center justify-center">
                    <CreateProjectModal onCreate={(project) => console.log("Novo projeto:", project)} />
                    <hr className="w-1/6 border-black" />
                </div>
            </div>

            <div className="flex flex-col pl-8">
                <ProjectSection title="Projetos Recentes" variant="recentes" />
                <ProjectSection title="Projetos Pessoais" variant="pessoais"  />
                <ProjectSection title="Projetos Corporativos" variant="corporativos" />

            </div>
            <Footer />

        </div>
    )
}