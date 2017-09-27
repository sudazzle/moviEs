import { fork } from 'redux-saga/effects'
import { watchFetchMovies, fetchUpcomingMovies } from './actions/movies'
import { watchFetchTvs } from './actions/tv'

export default function* rootSaga() {
	try {
		yield fork(watchFetchMovies)
		yield fork(fetchUpcomingMovies)
		yield fork(watchFetchTvs)
	} catch (e) {
		console.log(e)
	}
}

