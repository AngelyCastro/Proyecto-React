import { useSearchParams } from "react-router-dom"
import { useApartments } from "../../apartments/hooks/useApartments"
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"
import "../styles/Contact.css"

const Contact = () => {
  // Si se llega desde el detalle: /contacto?propiedad=ID
  const [searchParams] = useSearchParams()
  const initialPropertyId = searchParams.get("propiedad") ?? ""

  const { apartments, error } = useApartments()

  return (
    <section className="contact container">
      <header className="contact__header">
        <p className="eyebrow">Contacto</p>
        <h1 className="contact__title">Agenda una visita o solicita información</h1>
        <p className="contact__intro">
          Cuéntanos qué buscas y te respondemos en menos de 24 horas.
        </p>
      </header>

      {error && (
        <p className="contact__warning">
          No pudimos cargar la lista de propiedades. Puedes enviar una consulta general.
        </p>
      )}

      <div className="contact__layout">
        {/* key: si cambia la propiedad en la URL, el formulario se reinicia */}
        <ContactForm
          key={initialPropertyId}
          apartments={apartments}
          initialPropertyId={initialPropertyId}
        />
        <ContactInfo />
      </div>
    </section>
  )
}

export default Contact

