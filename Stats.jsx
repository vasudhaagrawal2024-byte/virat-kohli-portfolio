import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip
} from "chart.js"
import {
  motion,
  useMotionValue,
  useTransform,
  animate
} from "framer-motion"
import { useEffect } from "react"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

function Counter({ to }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut"
    })
    return controls.stop
  }, [to])

  return <motion.span>{rounded}</motion.span>
}

export default function Stats() {
  const data = {
    labels: ["ODI", "Test", "T20"],
    datasets: [
      {
        label: "Centuries",
        data: [50, 29, 1],
        borderRadius: 18,
        backgroundColor: [
          "rgba(59,130,246,0.9)",
          "rgba(37,99,235,0.9)",
          "rgba(29,78,216,0.9)"
        ]
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#020617",
        titleColor: "#fff",
        bodyColor: "#c7d2fe",
        borderColor: "rgba(255,255,255,0.15)",
        borderWidth: 1,
        padding: 14
      }
    },
    scales: {
      x: { ticks: { color: "#9ca3af" }, grid: { display: false } },
      y: { ticks: { color: "#9ca3af" }, grid: { color: "rgba(255,255,255,0.05)" } }
    }
  }

  return (
    <section className="relative px-10 md:px-24 py-44 bg-black overflow-hidden">
      <div className="absolute -top-48 -left-48 w-[750px] h-[750px] bg-blue-600/10 rounded-full blur-[220px]" />
      <div className="absolute top-1/3 right-[-200px] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[200px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
          Performance Intelligence
        </h2>
        <p className="mt-6 text-gray-400 text-xl leading-relaxed">
          An analytical view into longevity, adaptability, and sustained
          excellence across formats, conditions, and eras.
        </p>
      </motion.div>

      <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        <HeroMetric title="International Runs" suffix="+">
          <Counter to={26000} />
        </HeroMetric>

        <HeroMetric title="International Centuries" suffix="+">
          <Counter to={80} />
        </HeroMetric>

        <HeroMetric title="Years at Elite Level">
          <Counter to={15} />
        </HeroMetric>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
        <Micro label="ODI Average" value="57+" />
        <Micro label="Test Average" value="49+" />
        <Micro label="T20 Average" value="52+" />
        <Micro label="Overseas Centuries" value="18" />
        <Micro label="ICC Trophies" value="4" />
        <Micro label="Player of Series" value="10+" />
        <Micro label="Knockout Avg" value="60+" />
        <Micro label="Comeback Years" value="5+" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="mt-36 max-w-6xl grid md:grid-cols-2 gap-16 items-center"
      >
        <div
          className="
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          shadow-[0_45px_140px_rgba(0,0,0,0.85)]
        "
        >
          <h3 className="text-2xl font-semibold mb-6">
            Centuries Across Formats
          </h3>
          <Bar data={data} options={options} />
        </div>

        <div className="text-gray-300 leading-relaxed space-y-6">
          <h3 className="text-3xl font-semibold">
            What the data reveals
          </h3>
          <p>
            The distribution of centuries reflects Kohli’s dominance in ODI
            cricket while highlighting technical excellence in Test matches,
            particularly in overseas conditions.
          </p>
          <p className="text-gray-400">
            Rather than peaking in a single format, the numbers show consistent
            adaptation across formats — a defining factor behind his longevity
            at the highest level.
          </p>
          <p className="italic text-blue-400">
            Key Insight: Elite performance sustained across multiple cricketing
            eras through continuous evolution.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function HeroMetric({ title, children, suffix = "" }) {
  return (
    <motion.div
      whileHover={{ y: -12, rotateX: 5 }}
      transition={{ type: "spring", stiffness: 140 }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        shadow-[0_60px_160px_rgba(0,0,0,0.85)]
      "
    >
      <p className="text-gray-400 uppercase tracking-widest text-sm">
        {title}
      </p>
      <h3 className="mt-4 text-6xl font-extrabold">
        {children}{suffix}
      </h3>
    </motion.div>
  )
}

function Micro({ label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        rounded-xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        px-5 py-4
        text-center
      "
    >
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </motion.div>
  )
}
