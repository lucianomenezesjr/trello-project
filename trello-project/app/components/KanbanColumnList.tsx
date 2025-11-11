"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import KanbanColumn from "./KanbanColumn";
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
import { Plus } from "lucide-react";

type ColumnType = string;

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Record<ColumnType, string[]>>({
    backlog: ["Tarefa 1", "Tarefa 2"],
    doing: ["Tarefa 3"],
    review: ["Tarefa 4"],
    done: ["Tarefa 5"],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");

  function handleDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId as ColumnType;
    const destCol = destination.droppableId as ColumnType;

    if (sourceCol !== destCol) {
      const sourceItems = [...columns[sourceCol]];
      const destItems = [...columns[destCol]];
      const [moved] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [sourceCol]: sourceItems,
        [destCol]: destItems,
      });
    } else {
      const items = [...columns[sourceCol]];
      const [moved] = items.splice(source.index, 1);
      items.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [sourceCol]: items,
      });
    }
  }

  function handleAddColumn() {
    if (!newColumnName.trim()) return;
    const formatted = newColumnName.toLowerCase().replace(/\s+/g, "-");
    if (columns[formatted]) return alert("Essa coluna já existe!");
    setColumns({ ...columns, [formatted]: [] });
    setNewColumnName("");
    setIsModalOpen(false);
  }

  return (
    <div className="w-full h-full">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div
          className="
            flex flex-row items-start gap-6
            px-4 sm:px-6 py-6
            overflow-x-auto no-scrollbar
            w-full
          "
          style={{
            minWidth: "100%",
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          {Object.entries(columns).map(([title, tasks]) => (
            <div
              key={title}
              className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[28vw] lg:w-[20vw]"
            >
              <KanbanColumn title={title} tasks={tasks} />
            </div>
          ))}

          {/* Botão adicionar coluna */}
          <div className="shrink-0 flex items-center justify-center px-4">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                
                  <div className="flex flex-col bg-gray-200 rounded-3xl items-center justify-center">
                    <div className="flex bg-[#06276E] px-10 py-3 rounded-t-3xl items-center">
                      <Plus className="w-4 h-4 text-white mr-2" />
                      <h1 className="hover:underline-offset-1 text-white cursor-pointer">Adicionar coluna</h1> 
                    </div>
                    
                    <div className="bg-gray-300 w-45 h-13 rounded-xl mt-4 flex items-center justify-end"> 
                      <div className="bg-gray-500 w-7 h-7 rounded-full m-2"/>
                    </div>
                    <div className="bg-gray-300 w-45 h-13 rounded-xl mt-4 flex items-center justify-end"> 
                      <div className="bg-gray-500 w-7 h-7 rounded-full m-2"/>
                    </div>
                    <div className="bg-gray-300 w-45 h-13 rounded-xl mt-4 mb-4 flex items-center justify-end"> 
                      <div className="bg-gray-500 w-7 h-7 rounded-full m-2"/>
                      <div className="bg-gray-500 w-7 h-7 rounded-full mr-2"/>
                      <div className="bg-gray-500 w-7 h-7 rounded-full mr-2"/>
                    </div>
                  </div>
                  
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Nova coluna</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <Input
                    placeholder="Digite o nome da nova coluna..."
                    value={newColumnName}
                    onChange={(e) => setNewColumnName(e.target.value)}
                  />
                </div>
                <DialogFooter>
                  <Button onClick={handleAddColumn} className="bg-[#3BAAEF] hover:bg-[#3399E6]">
                    Criar coluna
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
