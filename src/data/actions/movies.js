import fetch from 'isomorphic-fetch'

export const REQUEST_TOP_RATED_MOVIES = 'REQUEST_TOP_RATED_MOVIES'
export const RECEIVE_TOP_RATED_MOVIES = 'RECEIVE_TOP_RATED_MOVIES'

export function requestTopRatedMovies(averageRate) {
	return {
		type: REQUEST_TOP_RATED_MOVIES,
		averageRate
	}
}

export function incrementTest() {
	return {
		type: 'INCREMENT'
	}
}

export function receiveTopRatedMovies(averageRate, json) {
	return {
		type: RECEIVE_TOP_RATED_MOVIES,
		averageRate,
		list: json.results,
		receivedAt: Date.now()
	}
}

export function fetchMovies(averageRate) {
	return dispatch => {
		dispatch(requestTopRatedMovies(averageRate))
		return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ed50cfba5936599ed75ae6ae5e664127&vote_average.gte=${averageRate}`)
			.then(response => response.json())
			.then(json => dispatch(receiveTopRatedMovies(averageRate, json)))
	}
}
