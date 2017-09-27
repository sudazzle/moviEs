import { REQUEST_TOP_RATED_MOVIES, RECEIVE_TOP_RATED_MOVIES, RECEIVE_UPCOMING_MOVIES } from '../actions/movies'

function movies(state = {isFetching: false,upcomingMovieList: [], list: []}, action) {
	switch (action.type) {
	case REQUEST_TOP_RATED_MOVIES:
		return Object.assign({}, state, {isFetching: true})
	case RECEIVE_TOP_RATED_MOVIES:
		return Object.assign({}, state, {isFetching: false, list: action.list, lastUpdated: action.receivedAt})
	case RECEIVE_UPCOMING_MOVIES:
		return {...state, upcomingMovieList: action.list}
	default:
		return state
	}
}

export default movies