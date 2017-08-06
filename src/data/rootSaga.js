import { fork } from 'redux-saga/effects'
import { watchFetchMovies } from './actions/movies'
import { watchFetchTvs } from './actions/tv'

export default function* rootSaga() {
	try {
		yield fork(watchFetchMovies)
		yield fork(watchFetchTvs)
	} catch (e) {
		console.log(e)
	}
}

