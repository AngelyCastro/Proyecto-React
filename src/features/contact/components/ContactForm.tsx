import type { Apartment } from "../../apartments/types/Apartment"
import type { ContactField } from "../types/ContactForm"
import { useContactForm } from "../hooks/useContactForm"
import { MIN_MESSAGE_LENGTH } from "../utils/validateContact"
import FormField from "./FormField"

interface ContactFormProps {
  apartments: Apartment[]
  initialPropertyId: string
}

const GENERAL_INQUIRY = "general"

const ContactForm = ({ apartments, initialPropertyId }: ContactFormProps) => {
  const { values, errors, status, handleChange, handleSubmit, resetForm } =
    useContactForm(initialPropertyId)

  // Conecta cada input con su mensaje de error o de ayuda
  const describedBy = (field: ContactField, hasHint = false): string | undefined => {
    if (errors[field]) return `contact-${field}-error`
    return hasHint ? `contact-${field}-hint` : undefined
  }

  if (status === "success") {
    const property = apartments.find((item) => String(item.id) === values.propertyId)
    return (
      <div className="contact-success" role="status">
        <p className="eyebrow">Solicitud registrada</p>
        <h2>¡Gracias, {values.name.trim()}!</h2>
        <p>
          Recibimos tu solicitud sobre{" "}
          <strong>{property ? property.name : "una consulta general"}</strong>.
          Te escribiremos a <strong>{values.email.trim()}</strong>.
        </p>
        <p className="contact-success__note">
          Esto es una simulación: el formulario no envía ni guarda datos reales.
        </p>
        <button type="button" className="btn btn--dark" onClick={resetForm}>
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  const messageLength = values.message.trim().length

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="contact-form__notice">
        <strong>Envío simulado:</strong> este formulario es una demostración y no envía
        tus datos a ningún servidor.
      </p>

      <FormField id="contact-name" label="Nombre completo" error={errors.name} required>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Ej. María Rodríguez" 
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy("name")}
        />
      </FormField>

      <div className="contact-form__row">
        <FormField id="contact-email" label="Correo electrónico" error={errors.email} required>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@gmail.com" 
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
          />
        </FormField>

        <FormField id="contact-phone" label="Teléfono" error={errors.phone}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="8888 8888" 
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
          />
        </FormField>
      </div>

      <FormField
        id="contact-propertyId"
        label="Propiedad de interés"
        error={errors.propertyId}
        required
      >
        <select
          id="contact-propertyId"
          name="propertyId"
          value={values.propertyId}
          onChange={handleChange}
          aria-invalid={Boolean(errors.propertyId)}
          aria-describedby={describedBy("propertyId")}
        >
          <option value="">Selecciona una opción</option>
          <option value={GENERAL_INQUIRY}>Consulta general</option>
          {apartments.map((apartment) => (
            <option key={apartment.id} value={String(apartment.id)}>
              {apartment.name} — {apartment.location}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        id="contact-message"
        label="Mensaje"
        error={errors.message}
        hint={`${messageLength}/${MIN_MESSAGE_LENGTH} caracteres mínimos`}
        required
      >
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Hola, me gustaría agendar una visita para este fin de semana..." // ← nuevo
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message", true)}
        />
      </FormField>

      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  )
}

export default ContactForm