import { useState, useEffect } from "react";

function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);

    // Update form values whenever a different employee is selected
    useEffect(() => {

        setValues(initialValues);

    }, [initialValues]);

    // Handle input changes
    function handleChange(event) {

        const { name, value } = event.target;

        setValues((previousValues) => ({

            ...previousValues,

            [name]: value

        }));

    }

    // Reset form to initial values
    function resetForm() {

        setValues(initialValues);

    }

    return {

        values,

        handleChange,

        resetForm

    };

}

export default useForm;