import { get } from 'axios'
import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
	yield console.log('Hello Sagas!')
	
}

export function* incrementAsync() {
	yield call(delay, 1000)
	yield put({ type: 'INCREMENT_SUCCESS'})
}

export function* watchFetchMovies() {
	yield takeEvery('INCREMENT', incrementAsync())
}


export function* fetchData() {
	try {
		const data = yield call(Api.fetchUser, 'https://api.themoviedb.org/3/discover/movie?api_key=ed50cfba5936599ed75ae6ae5e664127&vote_average.gte=10')
		yield put({type: 'FETCH_SUCCEEDED', data})
	} catch (error) {
		yield put({type: 'FETCH_FAILED', error})
	}
}

export default function* rootSaga() {
	yield[helloSaga(), incrementAsync()]
}
