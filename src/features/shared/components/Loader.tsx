import "../styles/Loader.css"

interface LoaderProps {
  message?: string;
}

const Loader = ({ message = "Cargando..." }: LoaderProps) => {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__spinner" aria-hidden="true"></span>
      <p className="loader__text">{message}</p>
    </div>
  )
}

export default Loader