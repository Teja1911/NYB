function FormInput({
    id,
    name,
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
}) {

    return (
        <div className="form-group">

            <label htmlFor={id}>
                {label}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

        </div>
    );
}

export default FormInput;