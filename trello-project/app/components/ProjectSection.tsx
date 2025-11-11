"use client";

import ProjectList from "./ProjectsList"

interface ProjectSectionProps {
    title: string;
    variant: "recentes" | "pessoais" | "corporativos" | "outros";
}
export default function ProjectSection({title, variant}: ProjectSectionProps){
    return(
        <div className="mb-8 mr-8">
            <div className="flex flex-col w-1/2 pb-2 pl-4">
                  <h1 className="text-3xl pt-4 pb-2 pl-2">{title}</h1>
                  <hr className="w-1/10 border-black" />
              </div>
              <ProjectList variant={variant} />
        </div>
    )
}