"use client";

import { toast } from "sonner";
import TrashButton from "./TrashButton";

interface ColorTag {
  name: string;
  color: string;
}

type ProjectVariant = "recentes" | "pessoais" | "corporativos" | "outros";

interface ProjectCardProps {
  name: string;
  description: string;
  tags?: ColorTag[];
  variant: ProjectVariant;
  colorIndex: number;
}

const variantPalettes: Record<ProjectVariant, string[]> = {
  recentes: ["bg-[#79CCFF]", "bg-[#1689D0]", "bg-[#1D7EB9]", "bg-[#3CA3E3]"],
  pessoais: ["bg-[#FF7979]", "bg-[#E24F4F]", "bg-[#F65858]", "bg-[#D95555]"],
  corporativos: ["bg-[#EAE666]", "bg-[#EFD61C]", "bg-[#F6E166]", "bg-[#EAE666]"],
  outros: ["bg-[#CFCFCF]", "bg-[#BDBDBD]", "bg-[#E5E5E5]", "bg-[#A8A8A8]"],
};

export default function ProjectCard({ name, description, variant, colorIndex }: ProjectCardProps) {
  const palette = variantPalettes[variant];
  const headerColor = palette[colorIndex % palette.length];

  return (
    <div className="flex justify-center mr-4 mb-4 w-full sm:w-auto">
      <div className="bg-[#F3F4F4] rounded-3xl mt-5 w-full sm:w-[300px] md:w-[20vw] shadow-md transition-transform duration-300 hover:scale-[1.02]">
        <div className={`${headerColor} rounded-t-3xl`}>
          <h1 className="font-bold text-lg sm:text-xl pl-4 sm:pl-5 py-3 sm:py-4 text-white truncate">
            {name}
          </h1>
        </div>

        <div className="p-2">
          <div className="bg-[#D9D9D9] rounded-xl p-3 sm:p-4 m-3 sm:m-4 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
            <p className="text-sm sm:text-base text-center sm:text-left sm:w-3/5">
              {description}
            </p>
            <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-6 justify-center">
              <TrashButton
                projectName={name}
                onDelete={() => toast.error("Item excluído!")}
              />
              <div className="bg-gray-200 w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
