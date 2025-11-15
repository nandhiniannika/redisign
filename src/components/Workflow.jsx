import { motion } from 'framer-motion'

const steps = [
  {title:'Capture', desc:'Add notes, clips or upload files.'},
  {title:'Enrich', desc:'AI auto-tags and summarizes.'},
  {title:'Connect', desc:'Link related memories.'},
  {title:'Retrieve', desc:'Find answers with search.'},
]

export default function Workflow(){
  return (
    <section id="workflow" className="py-16 bg-white/2">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">How it works</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, i)=>(
            <motion.div key={s.title} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:i*0.08}} className="p-5 rounded-xl bg-white/5 border border-white/6">
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="text-sm mt-2 text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
