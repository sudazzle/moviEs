import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import IndexPage from './views/indexPage'
import store from './data/configureStore'

import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>	
		</AppContainer>,
		document.getElementById('root') // eslint-disable-line
	)
}

render(IndexPage)

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./views/indexPage', () => {
		render(IndexPage)
	})
}
