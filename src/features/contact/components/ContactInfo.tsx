interface ContactItem {
  label: string
  value: string
}

const CONTACT_ITEMS: ContactItem[] = [
  { label: "Oficina", value: "Grecia, Alajuela, Costa Rica" },
  { label: "Correo", value: "info@amarea.com" },
  { label: "Teléfono", value: "+506 0000 0000" },
  { label: "Horario", value: "Lunes a sábado, 8:00 a. m. – 6:00 p. m." },
]

const ContactInfo = () => {
  return (
    <aside className="contact-info" aria-labelledby="contact-info-title">
      <h2 id="contact-info-title">Hablemos</h2>
      <p>
        Un asesor te acompaña en cada paso: desde la primera visita hasta la firma.
      </p>

      <dl className="contact-info__list">
        {CONTACT_ITEMS.map((item) => (
          <div key={item.label} className="contact-info__item">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

export default ContactInfo
