"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateProjectModalProps {
  onCreate?: (project: { name: string; type: string }) => void;
}

export default function CreateProjectModal({ onCreate }: CreateProjectModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleCreate = () => {
    if (!name || !type) return alert("Preencha todos os campos!");
    onCreate?.({ name, type });
    setName("");
    setType("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-xl pt-4 cursor-pointer hover:text-black/70 pb-2">
          Adicione novo projeto
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Criar novo projeto</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Nome do projeto</label>
            <Input
              placeholder="Ex: Dashboard Financeiro"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Tipo de projeto</label>
            <Select onValueChange={(value) => setType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Recentes</SelectItem>
                <SelectItem value="pessoais">Pessoais</SelectItem>
                <SelectItem value="corporativos">Corporativos</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleCreate}>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
