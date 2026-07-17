export function validateEmployee(form) {
    const errors = {};
    if (!form.name.trim()) {
        errors.name = "Employee name is required";
    }
    if (!form.email.trim()) {
        errors.email = "Email is required";
    }
    else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
        errors.email = "Enter a valid email";
    }
    if (!form.phone.trim()) {
        errors.phone = "Phone number is required";
    }
    else if (!/^\d{10}$/.test(form.phone)) {
        errors.phone = "Phone must contain exactly 10 digits";
    }
    if (!form.department.trim()) {
        errors.department = "Department is required";
    }
    if (!form.role.trim()) {
        errors.role = "Role is required";
    }
    if (!form.salary || Number(form.salary) <= 0) {
        errors.salary = "Salary must be greater than 0";
    }
    if (!form.experience.trim()) {
        errors.experience = "Experience is required";
    }
    if (!form.address.trim()) {
        errors.address = "Address is required";
    }
    return errors
}