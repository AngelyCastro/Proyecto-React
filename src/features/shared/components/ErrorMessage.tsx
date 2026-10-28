import "../styles/ErrorMessage.css"

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="error-message" role="alert">
      <span className="error-message__icon" aria-hidden="true">!</span>

      <h2 className="error-message__title">Algo salió mal</h2>

      <p className="error-message__text">{message}</p>

      {onRetry && (
        <button className="btn btn--dark" type="button" onClick={onRetry}>
          Intentar de nuevo
        </button>
      )}
    </div>
  )
}

export default ErrorMessage