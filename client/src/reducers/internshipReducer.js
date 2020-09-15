const internshipReducer = (state = [], action) => {
    const internshipInitialState = []
    switch(action.type){ 
        case 'ADD_INTERNSHIP': {
            return [...state, action.payload]
        }

        case 'SET_INTERNSHIP': {
            //console.log("checkhere", action.payload)
            return [].concat(state = internshipInitialState, action.payload)
        }

        case "DELETE_INTERNSHIP": {
            return state.filter(intern => {
                return intern._id !== action.payload._id
            })
        }

        default: {
            return [...state]
        }
    }
}

export default internshipReducer