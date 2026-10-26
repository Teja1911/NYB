function Button({ children, variant = "primary", type = "button", disabled = false, onClick, className = "" }) {
  return (
    <button
      type={type}
      className={`button button-${variant} ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;