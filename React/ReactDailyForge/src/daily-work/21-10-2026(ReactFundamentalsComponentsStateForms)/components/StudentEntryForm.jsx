import { useState } from "react";

const emptyForm = { name: "", email: "", course: "" };

export default function StudentEntryForm({
  editing,
  onSave,
  onCancel,
  existingStudents,
}) {
  const [form, setForm] = useState(() => editing || emptyForm);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(previous => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.course.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    const duplicate = existingStudents.some(student =>
      student.email.toLowerCase() === form.email.trim().toLowerCase()
      && student.id !== editing?.id
    );

    if (duplicate) {
      setError("This email is already registered.");
      return;
    }

    setError("");
    onSave({ ...form, name: form.name.trim(), email: form.email.trim() });
    setForm(emptyForm);
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{editing ? "Edit Student" : "Add Student"}</h2>

      {["name", "email", "course"].map(field => (
        <label key={field}>
          {field[0].toUpperCase() + field.slice(1)}
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
          />
        </label>
      ))}

      {error && <p className="form-error">{error}</p>}

      <button type="submit">{editing ? "Update Student" : "Add Student"}</button>

      {editing && (
        <button type="button" onClick={onCancel}>Cancel</button>
      )}
    </form>
  );
}