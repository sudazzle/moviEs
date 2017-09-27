import React from 'react'
import styles from './styles/Header.scss'
import Logo from './images/movies.svg'

class Header extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className={styles.topHeader}>
				<Logo className={styles.logo} />
				<div>
					<input  placeholder="search" className={styles.topHeaderSearch} type="text" />
				</div>
				<div className={styles.topHeaderCategories}>Categories
					<div className = {styles.categoriesContainer}>
						<ul>
							<li className={styles.movieCategories}>Movies</li>
							<li>Thiriller</li>
							<li>Suspense</li>
							<li>Crime</li>
							<li>Comedy</li>
							<li>Action</li>
							<li>Adventure</li>
							<li>Drama</li>
							<li>Fantasy</li>
							<li>History</li>
							<li>Documentry</li>
						</ul>
						<ul>
							<li className={styles.movieCategories}>TV Programs</li>
							<li>Thiriller</li>
							<li>Suspense</li>
							<li>Crime</li>
							<li>Comedy</li>
							<li>Action</li>
							<li>Adventure</li>
							<li>Drama</li>
							<li>Fantasy</li>
							<li>History</li>
							<li>Documentry</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header