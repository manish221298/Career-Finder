// const companyInitialState = []

const companyReducer = (state = [], action) => {
    const companyInitialState = []
    switch(action.type){ 
        case 'ADD_COMPANY': {
            return [...state, action.payload]
        }

        case 'SET_COMPANY': {
            //console.log("checkhere", action.payload)
            return [].concat(state = companyInitialState, action.payload)
        }

        case 'EDIT_COMPANY' : {
            return state.map(cmp => {
                if(cmp._id === action.payload._id){
                    return Object.assign({}, cmp, action.payload)
                }
                else{
                    return Object.assign({}, cmp)
                }
            })
        }

        case "DELETE_COMPANY": {
            return state.filter(comp => {
                return comp._id !== action.payload._id
            })
        }

        default: {
            return [...state]
        }
    }
}

export default companyReducer