export default function Footer(){
  return (
    <footer className="border-t border-white/6 bg-white/2">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} Memorae — Redesign by Nandhini</div>
        <div className="mt-3 md:mt-0 text-sm">Built with React + Tailwind + Framer Motion</div>
      </div>
    </footer>
  )
}
