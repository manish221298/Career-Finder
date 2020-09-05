// const resumeInitialState = []

const resumeReducer = (state = [], action) => {
    //const resumeInitialState = []

    switch(action.type){
        case "ADD_RESUME": {
            return [...state, action.payload]
        }
        case "SET_RESUME": {
            // return [].concat(state = resumeInitialState, action.payload)
            return [...action.payload]
        }
        case "EDIT_RESUME": {
            return state.map(cv => {
                if(cv._id === action.payload._id){
                    return Object.assign({}, cv, action.payload)
                }
                else{
                    return Object.assign({}, cv)
                }
            })
        }
        default: {
            return [...state]
        }
    }
}

export default resumeReducer