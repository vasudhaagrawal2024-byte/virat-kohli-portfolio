import { motion } from "framer-motion"
import CountUp from "react-countup"
import virat from "../assets/virat.jpg"

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0">
        <img
          src={virat}
          alt="Virat Kohli"
          className="
           max-w-full h-auto"
          
        />

        {/* LEFT → RIGHT BLEND */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

        {/* VIGNETTE FOR DEPTH */}
        <div className="absolute inset-0 shadow-[inset_0_0_300px_140px_rgba(0,0,0,0.95)]" />
      </div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          relative z-10
          h-full
          flex flex-col justify-center
          px-8 md:px-24
          max-w-4xl
        "
      >
        {/* NAME */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Virat Kohli
        </h1>

        {/* TAGLINE */}
        <p className="mt-3 text-lg md:text-xl text-gray-300">
          Intensity. Discipline. Legacy.
        </p>

        {/* DIVIDER */}
        <div className="mt-6 h-[2px] w-24 bg-blue-500 rounded-full" />

        {/* STATS */}
        <div className="flex gap-10 md:gap-16 mt-12">
          <Stat label="Matches" end={500} suffix="+" />
          <Stat label="Centuries" end={80} suffix="+" />
          <Stat label="Followers" end={250} suffix="M+" />
        </div>
      </motion.div>
    </section>
  )
}


function Stat({ label, end, suffix }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180 }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold">
        <CountUp end={end} duration={2} />{suffix}
      </h2>
      <p className="text-gray-400 text-sm md:text-base">
        {label}
      </p>
    </motion.div>
  )
}
