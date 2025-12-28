import {
  motion,
  animate,
  useMotionValue,
  useTransform
} from "framer-motion"
import { useEffect, useState } from "react"

function Counter({ to }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.8,
      ease: "easeOut"
    })
    return controls.stop
  }, [to])

  return <motion.span>{rounded}</motion.span>
}

export default function Fans() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="relative pt-32 px-10 md:px-24 min-h-screen bg-black overflow-hidden text-white">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          The Fans
        </h1>
        <p className="mt-6 text-gray-400 text-xl leading-relaxed">
          A global community connected by belief, discipline, and moments
          that transcend sport.
        </p>
      </motion.div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <Metric label="Global Followers">
          <Counter to={250} />M+
        </Metric>
        <Metric label="Countries Reached">
          <Counter to={100} />+
        </Metric>
        <Metric label="Years Inspiring Fans">
          <Counter to={15} />+
        </Metric>
      </div>

      <section className="mt-36 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">
          Official Social Presence
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <SocialCard
            name="Instagram"
            link="https://www.instagram.com/virat.kohli"
            gradient="from-pink-500 to-yellow-400"
          />
          <SocialCard
            name="Twitter / X"
            link="https://twitter.com/imVkohli"
            gradient="from-sky-400 to-blue-600"
          />
          <SocialCard
            name="Facebook"
            link="https://www.facebook.com/viratkohli"
            gradient="from-blue-600 to-blue-800"
          />
        </div>
      </section>

      <section className="mt-36 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">
          Live Social Highlights
        </h2>

        <div className="flex justify-center">
          <iframe
            title="Instagram"
            src="https://www.instagram.com/virat.kohli/embed"
            className="w-full max-w-xl h-[520px] rounded-3xl border border-white/10 bg-black"
            loading="lazy"
          />
        </div>
      </section>

      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-semibold mb-12 text-center md:text-left">
            Voices From The Stands
          </h2>

          <div className="space-y-10">
            <FanMessage
              name="Aarav Mehta"
              country="India 🇮🇳"
              message="Watching Virat taught me discipline beyond cricket. His intensity shaped my mindset."
            />
            <FanMessage
              name="James Carter"
              country="England 🇬🇧"
              message="Pure competitor. His overseas centuries changed modern batting standards."
            />
            <FanMessage
              name="Liam O’Connor"
              country="Australia 🇦🇺"
              message="You don’t need to like him — you respect the standards he sets."
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10
                     shadow-[0_50px_140px_rgba(0,0,0,0.85)]"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Leave Your Mark
          </h2>

          <p className="text-gray-400 mb-8">
            Every fan has a story. Share how this journey inspired you.
          </p>

          {!submitted ? (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <input
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/60 border border-white/10
                           focus:outline-none focus:border-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4 rounded-xl bg-black/60 border border-white/10
                           focus:outline-none focus:border-blue-500 resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500
                           transition font-semibold shadow-[0_20px_60px_rgba(59,130,246,0.5)]"
              >
                Submit Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <h3 className="text-2xl font-semibold">
                Thank you for sharing 💙
              </h3>
              <p className="mt-3 text-gray-400">
                Your message is now part of the community.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}

function Metric({ label, children }) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 4 }}
      transition={{ type: "spring", stiffness: 140 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
                 p-10 text-center shadow-[0_60px_160px_rgba(0,0,0,0.85)]"
    >
      <h3 className="text-5xl font-extrabold">{children}</h3>
      <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
        {label}
      </p>
    </motion.div>
  )
}

function FanMessage({ name, country, message }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 160 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg
                 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.75)]"
    >
      <p className="text-gray-300 text-lg leading-relaxed">“{message}”</p>
      <div className="mt-5 flex justify-between">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-gray-400">{country}</span>
      </div>
    </motion.div>
  )
}

function SocialCard({ name, link, gradient }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`px-8 py-6 rounded-2xl font-semibold text-black
                  bg-gradient-to-r ${gradient}
                  transition-all duration-500 hover:-translate-y-2
                  hover:shadow-2xl`}
    >
      {name}
    </a>
  )
}
