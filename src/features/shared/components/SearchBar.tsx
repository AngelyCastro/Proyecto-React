import type { ChangeEvent } from "react"
import "../styles/SearchBar.css"

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  label = "Buscar",
  placeholder = "Buscar...",
}: SearchBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <label className="search-bar">
      <span className="search-bar__label">{label}</span>

      <span className="search-bar__field">
        <svg
          className="search-bar__icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4.5 4.5" />
        </svg>

        <input
          className="search-bar__input"
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </span>
    </label>
  )
}

export default SearchBar