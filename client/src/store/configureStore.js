import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import resumeReducer from '../reducers/resumeReducer'
import companyReducer from '../reducers/companyReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
       user: userReducer,
       resume: resumeReducer,
       company: companyReducer,
    }), applyMiddleware(thunk))
    return store
}

export default configureStore



