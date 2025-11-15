import { useState } from 'react'
export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/5 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center font-bold">M</div>
          <div className="text-lg font-semibold">Memorae</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a className="hover:text-white/90" href="#features">Features</a>
          <a className="hover:text-white/90" href="#workflow">How it works</a>
          <a className="hover:text-white/90" href="#testimonials">Testimonials</a>
          <button className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-slate-900 font-medium">Get Started</button>
        </nav>
        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} className="p-2 rounded-md bg-white/6">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6">
          <a className="block py-2" href="#features">Features</a>
          <a className="block py-2" href="#workflow">How it works</a>
          <a className="block py-2" href="#testimonials">Testimonials</a>
        </div>
      )}
    </header>
  )
}
