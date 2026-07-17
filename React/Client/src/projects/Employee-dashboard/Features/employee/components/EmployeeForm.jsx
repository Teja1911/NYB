import React from "react";
import { validateEmployee } from "../utils/validation";
import { EMPLOYEE_ACTIONS } from "../reducer/employeeActionTypes";
function EmployeeForm({ state, dispatch}) {
    function handleChange(e) {
        dispatch({
            type: EMPLOYEE_ACTIONS.UPDATE_FIELD,
            field: e.target.name,
            value: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validateEmployee(state.form);
        if (Object.keys(validationErrors).length > 0) {
            dispatch({
                type: EMPLOYEE_ACTIONS.SET_ERRORS,
                payload: validationErrors
            });
            return;
        }
            dispatch({
                type: EMPLOYEE_ACTIONS.CLEAR_ERRORS
            });
            dispatch({
                type: EMPLOYEE_ACTIONS.SUBMIT_EMPLOYEE
            });
    }
    return (

        <div className="card">
            <h2>Employee Registration</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    value={state.form.name}
                    onChange={handleChange}
                />
                {
                    state.errors.name &&
                    <small className="error">
                    {state.errors.name}
                    </small>
                }
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={state.form.email}
                    onChange={handleChange}
                />
                  {
                    state.errors.name &&
                    <small className="error">
                    {state.errors.name}
                    </small>
                }
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={state.form.phone}
                    onChange={handleChange}
                />
                  {
                    state.errors.name &&
                    <small className="error">
                    {state.errors.name}
                    </small>
                }
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={state.form.department}
                    onChange={handleChange}
                />
                  {
                    state.errors.name &&
                    <small className="error">
                    {state.errors.name}
                    </small>
                }
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={state.form.role}
                    onChange={handleChange}
                />
                  {
                    state.errors.name &&
                    <small className="error">
                    {state.errors.name}
                    </small>
                }
                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={state.form.salary}
                    onChange={handleChange}
                />
                  {
                    state.errors.name &&
                    <small className="error">
                    {state.errors.name}
                    </small>
                }
                <input
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    value={state.form.experience}
                    onChange={handleChange}
                />
                  {
                    state.errors.name &&
                    <small className="error">
                    {state.errors.name}
                    </small>
                }
                <textarea
                    name="address"
                    placeholder="Address"
                    value={state.form.address}
                    onChange={handleChange}
                />
                <button type="submit">
                    {
                        state.editingEmployee ? "Update Employee" : "Register Employee"
                    }
                </button>
            </form>
    </div>
    )
}

export default EmployeeForm