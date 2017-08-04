import { REQUEST_TOP_RATED_TV_PROGRAM, RECEIVE_TOP_RATED_TV_PROGRAM } from '../actions/tv'

function tvPrograms(state = {isFetching: false, list: []}, action) {
	switch (action.type) {
	case REQUEST_TOP_RATED_TV_PROGRAM:
		return Object.assign({}, state, {isFetching: true})
	case RECEIVE_TOP_RATED_TV_PROGRAM:
		var newState = {
			isFetching: false,
			list: action.list,
			lastUpdated: action.lastUpdated
		}

		return Object.assign({}, state, newState)
	default:
		return state
	}
}

export default tvPrograms