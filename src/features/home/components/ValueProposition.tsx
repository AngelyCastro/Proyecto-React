import "../styles/ValueProposition.css"

interface ValueItem {
  icon: string
  title: string
  text: string
}

const VALUES: ValueItem[] = [
  {
    icon: "/icons/ubicacion.svg",
    title: "Ubicaciones exclusivas",
    text: "Cerca del mar, la montaña y la ciudad",
  },
  {
    icon: "/icons/diseno.svg",
    title: "Diseño y confort",
    text: "Espacios amplios y luminosos",
  },
  {
    icon: "/icons/llave.svg",
    title: "Acompañamiento personal",
    text: "De la primera visita a la entrega de llaves",
  },
  {
    icon: "/icons/documento.svg",
    title: "Información clara",
    text: "Precios y condiciones sin sorpresas",
  },
]

const ValueProposition = () => {
  return (
    <section className="value" aria-labelledby="value-title">
      <div className="container">
        <div className="value__header">
          <p className="eyebrow">Por qué elegirnos</p>
          <h2 className="value__title" id="value-title">
            Una experiencia pensada en usted
          </h2>
          <p className="value__intro">
            Cada residencia es seleccionada para ofrecer tranquilidad,
            elegancia y confianza en cada etapa.
          </p>
        </div>

        <ul className="value__list">
          {VALUES.map((item) => (
            <li className="value__item" key={item.title}>
              <img className="value__icon" src={item.icon} alt="" />
              <div>
                <h3 className="value__item-title">{item.title}</h3>
                <p className="value__item-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ValueProposition