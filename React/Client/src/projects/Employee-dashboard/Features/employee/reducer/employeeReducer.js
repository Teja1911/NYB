import { initialState } from "./employeeInitialState";
import { EMPLOYEE_ACTIONS } from "./employeeActionTypes";
const reducerActions={
    [EMPLOYEE_ACTIONS.UPDATE_FIELD]:(state,action)=>({
        ...state,
        form:{
            ...state.form,
            [action.field]:action.value,
        }
    }),
    [EMPLOYEE_ACTIONS.SET_ERRORS]: (state, action) => ({
        ...state,
        errors: action.payload
    }),
    [EMPLOYEE_ACTIONS.CLEAR_ERRORS]: (state) => ({
        ...state,
        errors: {}
    }),
    [EMPLOYEE_ACTIONS.REGISTER_EMPLOYEE]: (state) => ({
        ...state,
        employees: [
            ...state.employees,
            {
                ...state.form,
                id: Date.now()
            }
        ],
        form: initialState.form
    }),
    [EMPLOYEE_ACTIONS.DELETE_EMPLOYEE]: (state, action) => ({
        ...state,
        employees: state.employees.filter(
            (employee) => employee.id !== action.payload
        )
    }),
    [EMPLOYEE_ACTIONS.EDIT_EMPLOYEE]: (state, action) => ({
        ...state,
        form: action.payload,
        editingEmployee: action.payload.id
    }),
    [EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE]: (state) => ({
    ...state,
    employees: state.employees.map((employee)=>
        employee.id===state.editingEmployee
        ? {
            ...state.form,
            id:state.editingEmployee
        }
        : employee
    ),
    form:initialState.form,
    editingEmployee:null,
    errors:{}
    }),
    [EMPLOYEE_ACTIONS.UPDATE_SEARCH]: (state, action) => ({
        ...state,
        search: action.payload
    }),
    [EMPLOYEE_ACTIONS.SUBMIT_EMPLOYEE]: (state) => {
        if (state.editingEmployee) {
            return {
                ...state,
                employees: state.employees.map(employee =>
                    employee.id === state.editingEmployee
                        ? { ...state.form, id: state.editingEmployee }
                        : employee
                ),
                form: initialState.form,
                editingEmployee: null,
                errors: {}
            };
        }
        return {
                ...state,
                employees: [
                    ...state.employees,
                {
                    ...state.form,
                    id: Date.now()
                }
                
                ],
                form: initialState.form,
                errors: {}
        };
    },
    [EMPLOYEE_ACTIONS.UPDATE_FILTER]:(state,action)=>({
        ...state,
        filters:{
            ...state.filters,
            [action.field]:action.value
        }
    }),
}
export function employeeReducer(state, action) {
    const reducer = reducerActions[action.type];
    return reducer ? reducer(state, action): state;
}