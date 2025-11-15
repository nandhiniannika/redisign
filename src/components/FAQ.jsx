import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is Memorae and how can it help me?",
      a: "Memorae is a smart reminder and task organizer that helps you stay on top of your daily activities."
    },
    {
      q: "What types of reminders and features does Memorae offer?",
      a: "You can set task reminders, event reminders, recurring reminders, and custom alerts."
    },
    {
      q: "Can I set recurring reminders?",
      a: "Yes! Memorae fully supports daily, weekly, monthly, and custom recurring reminders."
    },
    {
      q: "Does Memorae spy on me or is my data safe?",
      a: "Memorae does not track you. All your data is encrypted and remains private."
    },
    {
      q: "How does Memorae protect my privacy and data security?",
      a: "We use industry-standard encryption and do not share your data with third parties."
    },
    {
      q: "What advantages does Memorae offer compared to other tools?",
      a: "Memorae is lightweight, fast, privacy-focused, and extremely easy to use."
    },
    {
      q: "Is Memorae available 24/7?",
      a: "Yes. You can access your reminders anytime."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="mt-2 text-slate-300">
          Have questions? We answer them here
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/10 backdrop-blur-xl p-5 rounded-xl cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg text-white">{item.q}</p>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-slate-300 mt-3"
                >
                  {item.a}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
