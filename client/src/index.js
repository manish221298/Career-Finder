import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import './style.css'

import configureStore from './store/configureStore'
import { startGetUser } from './actions/userAction'
import { startSetCompany } from './actions/companyAction'
import { startSetResume } from './actions/resumeAction'
import { startSetResumeForAdmin } from './actions/adminAction'
import { startSetAssessment } from './actions/assessmentAction'

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

// Handle page Reload
if(localStorage.getItem('authToken')){
  store.dispatch(startGetUser())
  store.dispatch(startSetCompany())
  store.dispatch(startSetResume())
  store.dispatch(startSetResumeForAdmin())
  store.dispatch(startSetAssessment())
}

const jsx = (
  <Provider store={store}>
      <App />
  </Provider>
)

// 

ReactDOM.render(
    jsx,
  document.getElementById('root')
);

