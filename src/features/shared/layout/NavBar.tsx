import { NavLink } from "react-router-dom"
import Logo from "../components/Logo"
import { useState } from "react"
import "../styles/NavBar.css"

interface NavItem {
  to: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Inicio" },
  { to: "/apartamentos", label: "Apartamentos" },
  { to: "/favoritos", label: "Favoritos" },
  { to: "/contacto", label: "Contacto" },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink
          to="/"
          className="navbar__brand"
          aria-label="AMAVAL — Inicio"
          onClick={closeMenu}
        >
          <Logo />
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          onClick={toggleMenu}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <nav
          id="menu-principal"
          className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default NavBar