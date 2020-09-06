
 const adminReducer = (state = [], action) => {
    switch(action.type){

        case "SET_RESUMEFORADMIN": {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default adminReducer