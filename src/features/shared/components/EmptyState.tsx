import type { ReactNode } from "react";
import "../styles/EmptyState.css";

interface EmptyStateProps {
  title: string;
  message?: string;
  children?: ReactNode;
}

const EmptyState = ({ title, message, children }: EmptyStateProps) => {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state__line" aria-hidden="true"></span>

      <h2 className="empty-state__title">{title}</h2>

      {message && (
        <p className="empty-state__text">{message}</p>
      )}

      {children && (
        <div className="empty-state__actions">{children}</div>
      )}
    </div>
  );
};

export default EmptyState;