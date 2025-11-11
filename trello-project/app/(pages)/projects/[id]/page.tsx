"use client";

import HeaderKanban from "@/app/components/HeaderKanban";
import Navbar from "@/app/components/Navbar";
import projectsData from "@/app/data/projectsCardData.json";
import { useParams } from "next/navigation";
import KanbanColumnList from "@/app/components/KanbanColumnList";


export default function ProjectKanban(){

    const { id } = useParams();
    const projectId = Number(id);

    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center flex-1 bg-[#00263D] text-white text-2xl">
            Projeto não encontrado 
            </div>
        </div>
        );
    }

    return(
        <div className="flex flex-col w-screen ">
            <Navbar />
            <HeaderKanban project={project} />
            <div className="flex justify-center h-[80vh]">
                <KanbanColumnList />
            </div>
            
        </div>
    )
}