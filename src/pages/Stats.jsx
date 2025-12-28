import { useState } from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export default function Stats() {
  const [format, setFormat] = useState("All")

  const statsData = {
    All: { runs: [13000, 8800, 4000], color: "#3b82f6" },
    ODI: { runs: [13000, 0, 0], color: "#3b82f6" },
    Test: { runs: [0, 8800, 0], color: "#22c55e" },
    T20: { runs: [0, 0, 4000], color: "#ef4444" },
  }

  const data = {
    labels: ["ODI", "Test", "T20"],
    datasets: [
      {
        label: "Runs Scored",
        data: statsData[format].runs,
        backgroundColor: statsData[format].color,
        borderRadius: 14,
        barThickness: 90,
      },
    ],
  }

  const options = {
    responsive: true,
    animation: { duration: 900, easing: "easeOutQuart" },
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb",
          generateLabels: chart => {
            const labels =
              ChartJS.defaults.plugins.legend.labels.generateLabels(chart)
            labels[0].fillStyle = statsData[format].color
            labels[0].strokeStyle = statsData[format].color
            return labels
          },
        },
      },
      tooltip: {
        backgroundColor: "#020617",
        titleColor: "#fff",
        bodyColor: "#c7d2fe",
      },
    },
    scales: {
      x: {
        ticks: { color: "#9ca3af" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#9ca3af" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  }

  const achievements = [
    {
      title: "🏆 World Cup Champion",
      year: "2011",
      desc: "Integral part of India’s historic World Cup victory, showcasing maturity beyond his years.",
    },
    {
      title: "🔥 T20 World Cup Dominance",
      year: "2016",
      desc: "One of the greatest individual T20 World Cup campaigns ever played.",
    },
    {
      title: "🌍 Historic Overseas Wins",
      year: "2018",
      desc: "Led India to iconic Test series wins overseas with unmatched aggression.",
    },
    {
      title: "💯 World Cup Century at 35",
      year: "2023",
      desc: "Proved longevity and hunger with a match-defining World Cup century under pressure.",
    },
  ]

  return (
    <main className="pt-32 px-10 md:px-24 min-h-screen text-white">
      <h1 className="text-6xl font-bold mb-4 reveal">
        Stats & Achievements
      </h1>
      <p className="text-gray-400 mb-12 reveal delay-1">
        Performance breakdown, milestones, and legacy-defining moments
      </p>

      <div className="flex gap-4 mb-12">
        {["All", "ODI", "Test", "T20"].map(type => (
          <button
            key={type}
            onClick={() => setFormat(type)}
            className={`px-6 py-2 rounded-full transition-all duration-300
              ${
                format === type
                  ? "bg-blue-600 shadow-lg shadow-blue-600/40"
                  : "bg-neutral-900 hover:bg-neutral-800"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="max-w-5xl bg-neutral-900/60 rounded-3xl p-10 mb-24 shadow-2xl">
        <Bar data={data} options={options} />
      </div>

      <h2 className="text-4xl font-bold mb-10">
        Iconic Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="group relative bg-neutral-900/70 p-8 rounded-2xl border border-white/5
                       transition-all duration-500 hover:-translate-y-2
                       hover:shadow-[0_0_40px_rgba(79,124,255,0.35)] cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {item.title}
            </h3>
            <span className="text-blue-400 text-sm">
              {item.year}
            </span>
            <p className="mt-4 text-gray-400 group-hover:text-gray-300 transition">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
