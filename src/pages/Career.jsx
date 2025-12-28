import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

export default function Career() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <main
      ref={ref}
      className="pt-32 px-10 md:px-24 min-h-screen bg-black overflow-hidden text-white"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Career Timeline
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          A journey shaped by discipline, resilience, and elite consistency.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative mt-32 max-w-5xl mx-auto">
        {/* Base line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-white/10" />

        {/* Animated progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px]
                     bg-gradient-to-b from-blue-500 via-blue-400 to-transparent
                     rounded-full"
        />

        <Event
          year="2008"
          side="left"
          icon="🏏"
          title="International Debut"
          brief="India debut vs Sri Lanka"
          stats={["Age: 19", "Format: ODI"]}
          takeaway="Foundations matter more than early success."
          details="Virat Kohli made his international debut in 2008 with calm intent rather than noise. His early years were focused on discipline, adaptability, and understanding international pressure."
          news={[
            {
              label: "VK Debut",
              url: "https://www.crictracker.com/cricket-news/on-this-day-in-2008-virat-kohlis-international-debut-for-india-in-an-odi-against-sri-lanka/",
            },
          ]}
        />

        <Event
          year="2011"
          side="right"
          icon="🏆"
          title="World Cup Champion"
          brief="Part of India’s World Cup winning squad"
          stats={["Runs: 282", "Matches: 9"]}
          takeaway="Pressure reveals temperament."
          details="The 2011 World Cup introduced Kohli to global pressure. Performing in a winning side at such an early stage helped shape his composure and sense of responsibility."
          news={[
            {
              label: "World Cup !",
              url: "https://www.indiatoday.in/sports/cricket/story/the-virat-kohli-impact-in-2011-world-cup-final-how-india-star-helped-settle-nerves-vs-sri-lanka-2354678-2023-04-02",
            },
           
          ]}
        />

        <Event
          year="2014"
          side="left"
          icon="👑"
          title="Test Captaincy"
          brief="Took charge of India’s Test side"
          stats={["Overseas wins", "Fitness revolution"]}
          takeaway="Leadership is defined by standards."
          details="As Test captain, Kohli transformed India's mindset with aggression, fitness, and fast-bowling dominance overseas. His leadership changed global perceptions."
          news={[
            {
              label: "Hindustan times – Test Captaincy",
              url: "https://www.hindustantimes.com/cricket/virat-kohli-is-indias-greatest-ever-test-captain-sourav-ganguly-ms-dhoni-not-even-close-stats-and-more-101747034149450.html",
            },
          ]}
        />

        <Event
          year="2023"
          side="right"
          icon="🔥"
          title="World Cup Century at 35"
          brief="Century under pressure"
          stats={["Runs: 765", "Avg: 95+"]}
          takeaway="Longevity comes from adaptability."
          details="At 35, Kohli delivered a defining World Cup century, silencing doubts with patience and maturity. A testament to mental resilience and evolution."
          news={[
            {
              label: "World Cup 2023",
              url: "https://sports.ndtv.com/icc-cricket-world-cup-2023/cricket-world-cup-2023-virat-kohli-slams-record-equalling-49th-odi-ton-on-35th-birthday-as-dominant-india-crush-south-africa-4548265",
            },
          ]}
        />
      </div>
    </main>
  )
}

/* ================= EVENT CARD ================= */

function Event({
  year,
  title,
  brief,
  details,
  takeaway,
  stats,
  side,
  icon,
  news = [],
}) {
  const [open, setOpen] = useState(false)
  const isLeft = side === "left"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative mb-32 flex ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 top-6
                   w-5 h-5 rounded-full bg-blue-500
                   shadow-[0_0_30px_rgba(79,124,255,0.8)]"
      />

      {/* Card */}
      <motion.div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 160 }}
        className="w-full md:w-[45%] rounded-2xl border border-white/10
                   bg-white/5 backdrop-blur-xl p-7
                   shadow-[0_25px_70px_rgba(0,0,0,0.6)]
                   cursor-pointer"
      >
        <span className="text-sm font-semibold text-blue-400">
          {year} {icon}
        </span>

        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-gray-400">{brief}</p>

        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-400">
          {stats.map((s, i) => (
            <span
              key={i}
              className="border border-white/10 px-3 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {details}
              </p>

              <p className="mt-3 text-sm italic text-blue-400">
                Key takeaway: {takeaway}
              </p>

              {/* NEWS LINKS */}
              {news.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Related Coverage
                  </p>
                  <ul className="space-y-2">
                    {news.map((n, i) => (
                      <li key={i}>
                        <a
                          href={n.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-gray-300 hover:text-white
                                     transition underline-offset-4 hover:underline"
                        >
                          ↗ {n.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
