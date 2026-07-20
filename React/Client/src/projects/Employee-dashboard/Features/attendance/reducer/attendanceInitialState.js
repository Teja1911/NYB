const initialState = {
    form: {
        employeeName: "",
        employeeId: "",
        department: "",
        date: "",
        status: ""
    },
    attendance: [],
    editingAttendance: null,
    search: "",
    filters: {
        department: "All",
        status: "All"
    },
    errors: {}
}