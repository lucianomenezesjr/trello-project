import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface KanbanTagProps {
  id: string;
  text: string;
}

export default function KanbanTag({ id, text }: KanbanTagProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-3 bg-white rounded-xl shadow cursor-grab active:cursor-grabbing"
    >
      {text}
    </div>
  );
}
