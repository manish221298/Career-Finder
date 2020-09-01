const assessmentReducer = (state= [], action) => {
    const assessmentInitialState = []
    switch(action.type){
        case "ADD_ASSESSMENT": {
            return [...state, action.payload]
        }
        case "SET_ASSESSMENT": {
            return [].concat(state = assessmentInitialState, action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default assessmentReducer