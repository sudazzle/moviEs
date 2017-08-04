import React from 'react'
import Rater from './Rater'
import styles from './styles/Poster.scss'

const Poster = (props) => (
	<div className={styles.poster}>
		<img src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`} alt={props.item.title} />
		<div className={styles.overview}>
			<h3>{props.item.title ? props.item.title : props.item.name}</h3>
			<div className={styles.content}><Rater />{props.item.overview}</div>
		</div>
	</div>
)

export default Poster