import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import type {
  ContactField,
  ContactFieldElement,
  ContactFormData,
  ContactFormErrors,
  SubmitStatus,
  UseContactFormResult,
} from "../types/ContactForm"
import { validateContact } from "../utils/validateContact"

const createInitialValues = (propertyId: string): ContactFormData => ({
  name: "",
  email: "",
  phone: "",
  propertyId,
  message: "",
})

const SIMULATED_DELAY_MS = 1000

export const useContactForm = (initialPropertyId = ""): UseContactFormResult => {
  const [values, setValues] = useState<ContactFormData>(() =>
    createInitialValues(initialPropertyId),
  )
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>("idle")

  const handleChange = (event: ChangeEvent<ContactFieldElement>) => {
    const field = event.target.name as ContactField
    const nextValues: ContactFormData = { ...values, [field]: event.target.value }
    setValues(nextValues)

    // Si el campo ya mostraba un error, se vuelve a validar mientras se corrige
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateContact(nextValues)[field] }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateContact(values)
    setErrors(validationErrors)

    const firstInvalid = Object.keys(validationErrors)[0]
    if (firstInvalid) {
      // Lleva el foco al primer campo con error (accesibilidad)
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    // Envío SIMULADO: no hay backend, solo se espera un momento
    setStatus("sending")
    window.setTimeout(() => setStatus("success"), SIMULATED_DELAY_MS)
  }

  const resetForm = () => {
    setValues(createInitialValues(initialPropertyId))
    setErrors({})
    setStatus("idle")
  }

  return { values, errors, status, handleChange, handleSubmit, resetForm }
}
