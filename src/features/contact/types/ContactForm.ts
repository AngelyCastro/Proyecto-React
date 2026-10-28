import type { ChangeEvent, FormEvent } from "react"

export interface ContactFormData {
  name: string
  email: string
  phone: string
  propertyId: string
  message: string
}

export type ContactField = keyof ContactFormData

// Cada campo puede tener (o no) un mensaje de error
export type ContactFormErrors = Partial<Record<ContactField, string>>

export type SubmitStatus = "idle" | "sending" | "success"

export type ContactFieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

export interface UseContactFormResult {
  values: ContactFormData
  errors: ContactFormErrors
  status: SubmitStatus
  handleChange: (event: ChangeEvent<ContactFieldElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  resetForm: () => void
}