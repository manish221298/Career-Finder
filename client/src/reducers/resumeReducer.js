// const resumeInitialState = []

const resumeReducer = (state = [], action) => {
    const resumeInitialState = []

    switch(action.type){
        case "ADD_RESUME": {
            return [...state, action.payload]
        }
        case "SET_RESUME": {
            return [].concat(state = resumeInitialState, action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default resumeReducer