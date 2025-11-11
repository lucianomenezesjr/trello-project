interface UserStackProps {
  users: { name: string; image: string }[];
  maxVisible?: number; 
}

export default function UserStack({ users, maxVisible = 4 }: UserStackProps) {
  const visibleUsers = users.slice(0, maxVisible);
  const remaining = users.length - maxVisible;

  return (
    <div className="flex items-center">
      {visibleUsers.map((user, index) => (
        <img
          key={index}
          src={user.image}
          className={`w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-400 -ml-3 first:ml-0 transition hover:scale-105 hover:z-10`}
        />
      ))}
      {remaining > 0 && (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-sm font-medium text-gray-700 border-2 border-white -ml-3">
          +{remaining}
        </div>
      )}
    </div>
  );
}
