import { NavLink, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate("/")              // go to home
    window.location.reload()   // hard refresh
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 md:px-24 py-4">

        {/* LOGO */}
        <h1
          onClick={handleLogoClick}
          className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer select-none"
        >
          Virat Kohli
        </h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-sm md:text-base">
          <NavItem to="/" label="Home" />
          <NavItem to="/career" label="Career" />
          <NavItem to="/stats" label="Stats" />
          <NavItem to="/gallery" label="Gallery" />
          <NavItem to="/fans" label="Fans" />
        </div>

      </div>
    </nav>
  )
}

/* ===== NAV ITEM ===== */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative pb-1 transition-colors duration-300
         ${isActive ? "text-blue-400" : "text-gray-300 hover:text-white"}`
      }
    >
      {label}

      {/* underline */}
      <span
        className="
          absolute left-0 bottom-0 h-[2px] w-full
          origin-left scale-x-0
          bg-blue-400
          transition-transform duration-300
          group-hover:scale-x-100
        "
      />
    </NavLink>
  )
}
