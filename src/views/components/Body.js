import React from 'react'
import styles from './styles/Body.scss'

const Body = props => (
	<div className={styles.appBody}>{props.children}</div>
)

export default Body