import { useRef, useState } from "react";

import FormInput from "./FormInput";
import SkillFields from "./SkillFields";
import { validateForm } from "../utils/validation";

function RegistrationForm() {
    const usernameRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        department: "",
        skills: [""],
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {

        const {
            name,
            value,
            type,
            checked,
        } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: type === "checkbox"
                ? checked
                : value,
        }));
    };

    const handleSkillsChange = (updatedSkills) => {

        setFormData((previousData) => ({
            ...previousData,
            skills: updatedSkills,
        }));
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const validationErrors = validateForm(formData);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log("Submitted Data:", formData);
    };

    const handleUncontrolledSubmit = () => {

    const username = usernameRef.current.value;

    console.log("Uncontrolled Username:", username);
    };

    return (
        <form
            className="registration-form"
            onSubmit={handleSubmit}
        >

            <h2>Employee Registration</h2>

            <FormInput
                id="name"
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                error={errors.name}
            />

            <FormInput
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                error={errors.email}
            />

            <FormInput
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                error={errors.password}
            />

            <FormInput
                id="phone"
                name="phone"
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                error={errors.phone}
            />

            <div className="form-group">

                <label htmlFor="department">
                    Department
                </label>

                <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                >
                    <option value="">
                        Select Department
                    </option>

                    <option value="frontend">
                        Frontend
                    </option>

                    <option value="backend">
                        Backend
                    </option>

                    <option value="testing">
                        Testing
                    </option>
                </select>

                {errors.department && (
                    <p className="error-message">
                        {errors.department}
                    </p>
                )}

            </div>

            <SkillFields
                skills={formData.skills}
                onSkillsChange={handleSkillsChange}
            />

            {errors.skills && (
                <p className="error-message">
                    {errors.skills}
                </p>
            )}

            <div className="checkbox-group">

                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                />

                <label htmlFor="terms">
                    I agree to the terms and conditions
                </label>

            </div>

            {errors.terms && (
                <p className="error-message">
                    {errors.terms}
                </p>
            )}

            <div className="uncontrolled-section">

                <h3>Uncontrolled Component</h3>

                <label htmlFor="username">
                    Username
                </label>

                <input
                    id="username"
                    type="text"
                    ref={usernameRef}
                    placeholder="Enter username"
                />

                <button
                    type="button"
                    onClick={handleUncontrolledSubmit}
                >
                    Read Username
                </button>

            </div>

            <button type="submit">
                Register
            </button>

        </form>
    );
}

export default RegistrationForm;