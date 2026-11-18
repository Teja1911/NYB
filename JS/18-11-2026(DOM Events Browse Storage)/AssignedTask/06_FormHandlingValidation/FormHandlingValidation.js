const RegistrationForm = document.getElementById("RegistrationForm")
const Output = document.getElementById("Output")
RegistrationForm.addEventListener("submit", Event => {
    // Prevent the browser from reloading the page.
    Event.preventDefault()
    // Read and trim the form values.
    const Name = document.getElementById("Name").value.trim()
    const Email = document.getElementById("Email").value.trim()
    const Phone = document.getElementById("Phone").value.trim()
    const Password = document.getElementById("Password").value
    const Errors = []
    // Validate name.
    if (Name.length < 3) {
        Errors.push("Name must contain at least 3 characters.")
    }
    // Basic email format validation.
    const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!EmailPattern.test(Email)) {
        Errors.push("Enter a valid email address.")
    }
    // Validate a 10-digit phone number.
    const PhonePattern = /^[6-9]\d{9}$/
    if (!PhonePattern.test(Phone)) {
        Errors.push("Enter a valid 10-digit Indian mobile number.")
    }
    // Validate password length.
    if (Password.length < 8) {
        Errors.push("Password must contain at least 8 characters.")
    }
    if (Errors.length > 0) {
        Output.textContent = "Please correct the following:\n" +
            Errors.map((Error, Index) => `${Index + 1}. ${Error}`).join("\n")
        return
    }
    Output.textContent =
        `Registration Successful!\nName: ${Name}\nEmail: ${Email}\nPhone: ${Phone}`
    RegistrationForm.reset()
})