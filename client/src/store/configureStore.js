import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import resumeReducer from '../reducers/resumeReducer'
import companyReducer from '../reducers/companyReducer'
import assessmentReducer from '../reducers/assessmentReducer'
import adminReducer from '../reducers/adminReducer'
import internshipReducer from '../reducers/internshipReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
       user: userReducer,
       resume: resumeReducer,
       company: companyReducer,
       assessment: assessmentReducer,
       admins: adminReducer,
       internship: internshipReducer,
    }), applyMiddleware(thunk))
    return store
}

export default configureStore



