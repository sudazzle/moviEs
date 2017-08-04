import { REQUEST_TOP_RATED_MOVIES, RECEIVE_TOP_RATED_MOVIES } from '../actions/movies'

function movies(state = {isFetching: false, list: []}, action) {
	console.log('action', action)
	switch (action.type) {
	case REQUEST_TOP_RATED_MOVIES:
		return Object.assign({}, state, {isFetching: true})
	case RECEIVE_TOP_RATED_MOVIES:
		return Object.assign({}, state, {isFetching: false, list: action.list, lastUpdated: action.receivedAt})
	default:
		return state
	}
}

export default movies