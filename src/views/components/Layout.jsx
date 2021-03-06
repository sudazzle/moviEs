import React from 'react'
import Header from './Header'
import Body from './Body'

const Layout = (props) => (
	<div id="outer-layout">
		<Header />
		<Body>{props.children}</Body> 
	</div>
)


export default Layout