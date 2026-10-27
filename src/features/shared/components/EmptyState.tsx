
import "../styles/EmptyState.css";

interface EmptyStateProps {
  title: string;
  message?: string;
}

const EmptyState = ({ title, message }: EmptyStateProps) => {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state__line" aria-hidden="true"></span>

      <h2 className="empty-state__title">{title}</h2>

      {message && (
        <p className="empty-state__text">{message}</p>
      )}
    </div>
  );
};

export default EmptyState;