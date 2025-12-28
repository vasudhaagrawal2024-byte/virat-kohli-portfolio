import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Career from "./pages/Career"
import Stats from "./pages/Stats"
import Gallery from "./pages/Gallery"
import Fans from "./pages/Fans"

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fans" element={<Fans />} />
        </Routes>
      </main>
    </div>
  )
}

