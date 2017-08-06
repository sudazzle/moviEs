import React from 'react'
import styles from './styles/Header.scss'
import Logo from './images/movies.svg'

const Header = () => (
	<div className={styles.topHeader}>
		<Logo className={styles.logo} />
	</div>
)

export default Header