import type { ContactFormData, ContactFormErrors } from "../types/ContactForm"

export const MIN_MESSAGE_LENGTH = 20

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_REGEX = /^\+?[\d\s-]{8,15}$/

// Función pura: recibe los datos y devuelve los errores encontrados
export const validateContact = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {}

  const name = data.name.trim()
  if (!name) {
    errors.name = "Escribe tu nombre."
  } else if (name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres."
  }

  const email = data.email.trim()
  if (!email) {
    errors.email = "Escribe tu correo electrónico."
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "El correo no tiene un formato válido (ej. nombre@correo.com)."
  }

  // El teléfono es opcional: solo se valida si se escribió algo
  const phone = data.phone.trim()
  if (phone && !PHONE_REGEX.test(phone)) {
    errors.phone = "Usa solo números, mínimo 8 dígitos (ej. 8888 8888)."
  }

  if (!data.propertyId) {
    errors.propertyId = "Selecciona una propiedad o «Consulta general»."
  }

  const message = data.message.trim()
  if (!message) {
    errors.message = "Escribe tu mensaje."
  } else if (message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `El mensaje debe tener al menos ${MIN_MESSAGE_LENGTH} caracteres (llevas ${message.length}).`
  }

  return errors
}