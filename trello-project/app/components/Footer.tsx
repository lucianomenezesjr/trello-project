export default function Footer() {
  return (
    <footer className="w-full bg-[#00263D] text-white py-6 mt-10 flex flex-col items-center justify-center text-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold tracking-wide"> Trello</span>
      </div>

      <p className="text-gray-300 text-center">
        Organize seus projetos com eficiência e colaboração.
      </p>

      <div className="flex gap-4 mt-3 text-gray-400 text-xs">
        <a href="#" className="hover:text-white transition">Política de Privacidade</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition">Termos de Uso</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition">Contato</a>
      </div>

      <div className="mt-4 text-gray-500 text-xs">
        © {new Date().getFullYear()} Trello. Todos os direitos reservados.
      </div>
    </footer>
  );
}
