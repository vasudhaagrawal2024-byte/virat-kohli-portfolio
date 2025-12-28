import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const media = [
  {
    id: 1,
    type: "image",
    title: "Iconic Cover Drive",
    src: "https://wallpapercave.com/wp/wp14056212.jpg",
  },
  {
    id: 2,
    type: "image",
    title: "Winning Moment",
    src: "https://wallpapercave.com/wp/wp15467083.jpg",
  },
  {
    id: 3,
    type: "video",
    title: "Century Highlights",
    src: "https://www.youtube.com/embed/K4DvQaB1xco",
  },
  {
    id: 4,
    type: "interview",
    title: "Leadership & Mindset",
    src:"https://www.youtube.com/embed/Jqo1BM0TfBY",
  },
]

const filters = ["all", "image", "video", "interview"]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selected, setSelected] = useState(null)

  const filteredMedia =
    activeFilter === "all"
      ? media
      : media.filter(item => item.type === activeFilter)

  return (
    <main className="pt-32 px-10 md:px-24 min-h-screen text-white">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mb-6"
      >
        Media Gallery
      </motion.h1>

      <p className="text-gray-400 mb-12 max-w-2xl">
        A visual journey through iconic moments, match-winning performances,
        and defining interviews.
      </p>

      {/* Filters */}
      <div className="flex gap-4 mb-14">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full transition-all
              ${
                activeFilter === filter
                  ? "bg-blue-600 shadow-lg shadow-blue-600/40"
                  : "bg-neutral-900 hover:bg-neutral-800"
              }`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {filteredMedia.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative cursor-pointer rounded-2xl overflow-hidden
                       border border-white/10 bg-neutral-900"
            onClick={() => setSelected(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-64 bg-black">
                <span className="text-xl text-gray-400">▶ {item.type}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-black/40 opacity-0
                            hover:opacity-100 transition flex items-end p-4">
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full bg-black rounded-3xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {selected.type === "image" ? (
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full object-cover"
                />
              ) : (
                <iframe
                  src={selected.src}
                  title={selected.title}
                  className="w-full h-[450px]"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}

              <div className="p-6">
                <h2 className="text-2xl font-bold">{selected.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
