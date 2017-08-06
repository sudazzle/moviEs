import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import rootSaga from './rootSaga'

const preloadedState = {}
const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = compose(applyMiddleware(sagaMiddleware, loggerMiddleware))(createStore)
const store = createStoreWithMiddleware(
		rootReducer, 
		preloadedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

sagaMiddleware.run(rootSaga)

export default store
