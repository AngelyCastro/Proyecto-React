import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import "../styles/Footer.css"

interface FooterLink {
  to: string
  label: string
}

const FOOTER_LINKS: FooterLink[] = [
  { to: "/apartamentos", label: "Apartamentos" },
  { to: "/favoritos", label: "Favoritos" },
  { to: "/contacto", label: "Contacto" },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Logo />
          <p>
            Apartamentos de lujo seleccionados para quienes buscan diseño,
            comodidad y la mejor ubicación.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Enlaces del pie de página">
          <h3>Explorar</h3>
          {FOOTER_LINKS.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer__contact">
          <h3>Contacto</h3>
          <p>Grecia, Alajuela, Costa Rica</p>
          <p>info@amaval.com</p>
          <p>+506 0000 0000</p>
        </div>
      </div>

      <p className="container footer__copyright">
        © {currentYear} AMAVAL 
      </p>
    </footer>
  )
}

export default Footer
