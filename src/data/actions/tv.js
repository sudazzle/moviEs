export const REQUEST_TOP_RATED_TV_PROGRAM = 'REQUEST_TOP_RATED_TV_PROGRAM'
export const RECEIVE_TOP_RATED_TV_PROGRAM = 'RECEIVE_TOP_RATED_TV_PROGRAM'

import { get } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

export function requestTopRatedTvProgram() {
	return {
		type: REQUEST_TOP_RATED_TV_PROGRAM
	}
}

export function receiveTopRatedTvProgram(results) {
	return {
		type: RECEIVE_TOP_RATED_TV_PROGRAM,
		list: results,
		receivedAt: Date.now()
	}
}

// sagas
export function* watchFetchTvs() {
	yield takeLatest(REQUEST_TOP_RATED_TV_PROGRAM, fetchTvs)
}


export function* fetchTvs() {
	try {
		const data = yield call(get, 'https://api.themoviedb.org/3/discover/tv?api_key=ed50cfba5936599ed75ae6ae5e664127&vote_average.gte=10')
		console.log('data', data.data)
		yield put({type: RECEIVE_TOP_RATED_TV_PROGRAM, list: data.data.results})
	} catch (error) {
		yield put({type: 'FETCH_FAILED', error})
	}
}
