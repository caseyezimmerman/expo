import { combineReducers } from 'redux'

import TaskReducer from './TaskReducer'

const rootReducer = combineReducers({ //have to import combine reducer
	task: TaskReducer
})

export default rootReducer