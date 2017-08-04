import fetch from 'isomorphic-fetch'

export const REQUEST_TOP_RATED_TV_PROGRAM = 'REQUEST_TOP_RATED_TV_PROGRAM'
export const RECEIVE_TOP_RATED_TV_PROGRAM = 'RECEIVE_TOP_RATED_TV_PROGRAM'

export function requestTopRatedTvProgram(averageRate) {
	return {
		type: REQUEST_TOP_RATED_TV_PROGRAM,
		averageRate
	}
}

export function receiveTopRatedTvProgram(averageRate, json) {
	return {
		type: RECEIVE_TOP_RATED_TV_PROGRAM,
		list: json.results,
		averageRate,
		receivedAt: Date.now()
	}
}

export function fetchTvPrograms(averageRate) {
	return dispatch => {
		dispatch(requestTopRatedTvProgram(averageRate))
		fetch(`https://api.themoviedb.org/3/discover/tv?api_key=ed50cfba5936599ed75ae6ae5e664127&vote_average.gte=${averageRate}`)
			.then(response => response.json())
			.then(json => dispatch(receiveTopRatedTvProgram(averageRate, json)))
	}
}