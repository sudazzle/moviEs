import React from 'react'
// import Rater from './Rater'
import styles from './styles/Poster.scss'

const Poster = (props) => (
	<div className={styles.poster} 
		style={{
			background: `url(https://image.tmdb.org/t/p/w500${props.item.poster_path})`,
			size: 'cover',
			backgroundRepeat: 'no-repeat'
		}}>
		<h2 className={styles.posterTitle}>{props.item.title ? props.item.title : props.item.name}</h2>
	</div>
)

export default Poster
		// <div className={styles.overview}>
		// 	<h3>{props.item.title ? props.item.title : props.item.name}</h3>
		// 	<div className={styles.content}><Rater />{props.item.overview.substring(0, 200)}...</div>
		// </div>