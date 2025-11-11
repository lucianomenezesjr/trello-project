import { useState } from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface KanbanColumnProps {
  title: string;
  tasks: string[];
}

export default function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (!newTask.trim()) return;
    // Lógica para adicionar a nova tarefa
    setNewTask("");
    setIsModalOpen(false);
  }

  const colorMap: Record<string, string> = {
    backlog: "bg-[#E95757]",
    doing: "bg-[#FFDE73]",
    review: "bg-[#81E497]",
    done: "bg-[#81D2E4]",
  };

  const randomColors = [
    "bg-purple-600",
    "bg-pink-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-600",
  ];
  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  const bgColor = colorMap[title] || randomColor;

  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="
            flex flex-col 
            w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[20vw]
            rounded-3xl bg-[#F3F4F4] shrink-0 
            justify-between shadow-md transition-transform 
            hover:scale-[1.02]
          "
        >
          {/* Cabeçalho */}
          <div
            className={`flex w-full ${bgColor} rounded-t-3xl py-3 md:py-4 px-4 items-center justify-between`}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold capitalize text-white truncate">
              {title}
            </h2>
          </div>

          {/* Lista de tarefas */}
          <div
            className="
              flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 flex-1 min-h-[120px] 
              overflow-y-auto no-scrollbar
            "
          >
            {tasks.map((task, index) => (
              <Draggable
                draggableId={`${title}-${index}`}
                index={index}
                key={`${title}-${index}`}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`
                      p-3 sm:p-4 bg-[#D9D9D9] rounded-xl 
                      cursor-grab active:cursor-grabbing 
                      text-sm sm:text-base
                      transition-transform duration-200 
                      ${
                        snapshot.isDragging
                          ? "rotate-3 scale-105 shadow-xl"
                          : ""
                      }
                    `}
                  >
                    {task}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>

          {/* Botão adicionar */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <div
                className="
                  flex justify-start pl-4 sm:pl-6 cursor-pointer gap-1 sm:gap-2 pb-4 
                  hover:underline items-center border-t border-gray-200 pt-3
                "
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer hover:text-gray-800" />
                <h1 className="pt-1 text-xs sm:text-sm font-medium">
                  Adicionar tarefa
                </h1>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Nova tarefa</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <Input
                  placeholder="Digite o nome da nova tarefa..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button
                  onClick={handleAddTask}
                  className="bg-[#3BAAEF] hover:bg-[#3399E6]"
                >
                  Criar tarefa
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </Droppable>
  );
}
