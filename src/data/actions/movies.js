import { get } from 'axios'
import { call, take, put, takeLatest } from 'redux-saga/effects'

// actions
export const REQUEST_TOP_RATED_MOVIES = 'REQUEST_TOP_RATED_MOVIES'
export const RECEIVE_TOP_RATED_MOVIES = 'RECEIVE_TOP_RATED_MOVIES'
export const REQUEST_UPCOMING_MOVIES = 'REQUEST_UPCOMING_MOVIES'
export const RECEIVE_UPCOMING_MOVIES = 'RECEIVE_UPCOMING_MOVIES'


// action creators
export function requestTopRatedMovies(averageRate) {
	return {
		type: REQUEST_TOP_RATED_MOVIES,
		averageRate
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

export function requestUpcomingMovies(averageRate) {
	return {
		type: REQUEST_UPCOMING_MOVIES,
		averageRate
	}
}

export function receiveUpcomingMovies(averageRate, json) {
	return {
		type: RECEIVE_UPCOMING_MOVIES,
		averageRate,
		list: json.results,
		receivedAt: Date.now()
	}
}

// sagas
export function* watchFetchMovies() {
	yield takeLatest(REQUEST_TOP_RATED_MOVIES, fetchMovies)
}


export function* fetchMovies() {
	try {
		const data = yield call(get, 'https://api.themoviedb.org/3/discover/movie?api_key=ed50cfba5936599ed75ae6ae5e664127&vote_average.gte=10')
		yield put({type: RECEIVE_TOP_RATED_MOVIES, list: data.data.results})
	} catch (error) {
		yield put({type: 'FETCH_FAILED', error})
	}
}

export function* fetchUpcomingMovies () {
	yield take(REQUEST_UPCOMING_MOVIES)
	try {
		const data = yield call(get, 'https://api.themoviedb.org/3/movie/upcoming?api_key=ed50cfba5936599ed75ae6ae5e664127')
		yield put({type: RECEIVE_UPCOMING_MOVIES, list: data.data.results})
	}  catch (error) {
		yield put({type: 'FETCH_FAILED', error})
	}
}

