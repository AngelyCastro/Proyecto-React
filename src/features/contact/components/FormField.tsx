import type { ReactNode } from "react"

interface FormFieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  required?: boolean
  children: ReactNode
}

const FormField = ({ id, label, error, hint, required = false, children }: FormFieldProps) => {
  return (
    <div className={`form-field ${error ? "form-field--error" : ""}`}>
      <label className="form-field__label" htmlFor={id}>
        {label}
        {required ? (
          <span className="form-field__required" aria-hidden="true"> *</span>
        ) : (
          <span className="form-field__optional"> (opcional)</span>
        )}
      </label>

      {children}

      {/* El error aparece junto al campo; el input lo enlaza con aria-describedby */}
      {error ? (
        <p className="form-field__error" id={`${id}-error`}>{error}</p>
      ) : (
        hint && <p className="form-field__hint" id={`${id}-hint`}>{hint}</p>
      )}
    </div>
  )
}

export default FormField
