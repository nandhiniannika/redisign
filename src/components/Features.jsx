import { motion } from 'framer-motion'

const items = [
  {title:'Smart Capture', desc:'Save notes, web clips, and images with automatic context.'},
  {title:'Instant Search', desc:'Powerful semantic search to surface relevant memories.'},
  {title:'Connections', desc:'Visual graph connects related ideas and notes.'},
]

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Features that empower memory</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Designed to make your knowledge accessible, private, and instantly useful.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx)=>(
            <motion.div key={it.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: idx*0.12}} className="p-6 rounded-2xl bg-white/4 border border-white/6">
              <div className="text-xl font-semibold">{it.title}</div>
              <p className="mt-3 text-slate-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
