import Link from "next/link";
import ProjectCard from "./ProjectCard";
import projects from "@/app/data/projectsCardData.json";

interface ProjectListProps {
    variant: "recentes" | "pessoais" | "corporativos" | "outros";
}

export default function ProjectList({variant}: ProjectListProps) {
  return (
    <div className="flex overflow-auto gap-6 no-scrollbar">
      {projects.map((project, index) => (
        <Link href={`/projects/${project.id}`} key={project.id}>
        
            <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            variant={variant}
            colorIndex={index} 
            />

        </ Link>
      ))}
    </div>
  );
}
