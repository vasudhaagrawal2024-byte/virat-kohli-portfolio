export default function HomeStats() {
  return (
    <section className="bg-zinc-900 py-10 px-6 md:px-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat title="ODI Runs" value="13,000+" />
        <Stat title="Test Runs" value="8,800+" />
        <Stat title="T20 Runs" value="4,000+" />
        <Stat title="ICC Trophies" value="4" />
      </div>
    </section>
  )
}

function Stat({ title, value }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-400">{title}</p>
    </div>
  )
}