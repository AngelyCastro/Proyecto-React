import { Link } from "react-router-dom"
import "../styles/Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__content">
        <p className="eyebrow">Departamentos de lujo · Costa Rica</p>

        <h1 className="hero__title">Un hogar que se siente como un refugio</h1>

        <p className="hero__text">
          Apartamentos seleccionados con diseño, calma y vistas que inspiran.
          Encuentre el espacio ideal para su próxima etapa.
        </p>

        <div className="hero__actions">
          <Link className="btn btn--primary" to="/apartamentos">Ver apartamentos</Link>

          <Link className="btn btn--light" to="/contacto">Solicitar información</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero