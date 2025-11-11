"use client";

import { useState } from "react";
import { Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TrashButtonProps {
  onDelete?: () => void; // callback para quando o usuário confirmar a exclusão
  projectName?: string;  // opcional, pra mostrar o nome do item no modal
}

export default function TrashButton({ onDelete, projectName }: TrashButtonProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    onDelete?.();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="p-2 rounded-lg transition hover:bg-red-50">
          <Trash className="w-5 h-5 text-red-600 hover:text-red-400" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Confirmar exclusão</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-600">
          Tem certeza que deseja excluir{" "}
          <span className="font-semibold">{projectName || "este item"}</span>?
          Essa ação não pode ser desfeita.
        </p>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
