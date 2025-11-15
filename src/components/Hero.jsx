import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="min-h-[70vh] flex items-center" style={{background: '#071025'}}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1,x:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-soft-text">
            Capture, Organize and Retrieve Knowledge — Effortlessly
          </h1>
          <p className="mt-4 text-lg text-slate-200/80">
            A modern knowledge companion that helps individuals and teams store context-rich memories,
            connect ideas, and surface insights when it matters most.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 rounded-lg font-semibold text-slate-900 bg-gradient-to-r from-teal-400 to-purple-600 shadow-lg">
              Try demo
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/10 text-soft-text">View features</button>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="relative">
          <div className="h-64 md:h-80 rounded-2xl bg-white/6 p-6 flex flex-col justify-between backdrop-blur">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-slate-300">Workspace</div>
                <div className="text-lg font-semibold mt-1 text-soft-text">Design Notes</div>
              </div>
              <div className="text-xs text-slate-400">3 Nov</div>
            </div>
            <div className="mt-4">
              <p className="text-slate-200/80">"Ideas about the onboarding flow and microcopy."</p>
            </div>
            <div className="mt-6 flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-300 to-purple-500"></div>
              <div className="text-sm text-slate-300">Saved • AI-summarized</div>
            </div>
          </div>

          <div className="absolute -right-6 -bottom-6 w-40 h-24 rounded-xl bg-gradient-to-r from-teal-300/70 to-purple-600/80 opacity-75 blur-sm transform rotate-6"></div>
        </motion.div>
      </div>
    </section>
  )
}
