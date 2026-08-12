const initialState={
    count:0
}
function countReducer(state,action){
    switch(action.type){
        case "ADD":
            return {
                ...state,
                count:state.count+1,
            }
        case "REMOVE":
            return{
                ...state,
                count:state.count-1
            }
        case "RESET":
            return{
                ...state,
                count:0
            }
        default:
            return state
    }
}
export {initialState,countReducer}