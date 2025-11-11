import UserStack from "./UserStack";
import { Lock } from "lucide-react";

interface TeamMember {
  name: string;
  image: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  team: TeamMember[];
}

interface HeaderKanbanProps {
  project: Project;
}

export default function HeaderKanban({ project }: HeaderKanbanProps) {
  return (
    <header className="w-full bg-[#00263D] text-white">
      <div
        className="
          flex flex-col sm:flex-row 
          justify-between items-center 
          gap-4 sm:gap-6
          w-full px-4 sm:px-8 py-4
        "
      >
        {/* Nome do projeto */}
        <h1 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
          {project.name}
        </h1>

        {/* Stack de usuários */}
        <UserStack users={project.team} />

        {/* Botão compartilhar */}
        <button
          className="
            flex items-center justify-center gap-2
            bg-[#3BAAEF] hover:bg-[#3399E6]
            px-4 py-2 rounded-lg text-sm sm:text-base
            transition-colors duration-200
            w-full sm:w-auto
          "
        >
          <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Compartilhar</span>
        </button>
      </div>
    </header>
  );
}
