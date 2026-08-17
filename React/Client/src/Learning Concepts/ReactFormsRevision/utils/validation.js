export function validateForm(formData) {

    const errors = {};

    // Full Name validation
    if (!formData.name.trim()) {
        errors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
        errors.name = "Full name must contain at least 3 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
        errors.email = "Enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 8) {
        errors.password = "Password must contain at least 8 characters";
    }

    // Phone validation
    if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone number must contain exactly 10 digits";
    }

    // Department validation
    if (!formData.department) {
        errors.department = "Please select a department";
    }

    // Terms validation
    if (!formData.terms) {
        errors.terms = "You must agree to the terms and conditions";
    }

    return errors;
}