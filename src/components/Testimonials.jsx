import { motion } from "framer-motion";

// Simple custom card (replaces shadcn/ui card)
const Card = ({ children }) => (
  <div className="bg-slate-900/60 border border-slate-700 rounded-2xl shadow-xl backdrop-blur-xl">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[1, 2, 3].map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent>
                  <p className="text-slate-300 italic">
                    “This platform completely improved my workflow. Super clean,
                    fast, and beautiful UI!”
                  </p>

                  <div className="mt-4">
                    <p className="font-semibold text-white">User {id}</p>
                    <p className="text-sm text-slate-400">Verified Reviewer</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
