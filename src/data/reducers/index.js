import { combineReducers } from 'redux'
import tvProgramList from './tv'
import moviesList from './movies'


const rootReducer = combineReducers({
	moviesList,
	tvProgramList
})

export default rootReducer