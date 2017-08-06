import React, { Component } from 'react'
import Layout from '../components/Layout'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { requestTopRatedMovies } from '../../data/actions/movies'
import styles from '../components/styles/Header.scss'
import { requestTopRatedTvProgram } from '../../data/actions/tv'


class IndexPage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(requestTopRatedMovies())
		dispatch(requestTopRatedTvProgram())
	}

	render() {
		return (
			<Layout>
				<h2 className={styles.listHeader}>Top Rated Movies</h2>
				{
					this.props.movies.list.map(item => {
						return (<Poster item={item} />)
					})
				}
				<h2 className={styles.listHeader}>Top Rated TV Programs</h2>
				{
					this.props.tvPrograms.list.map(item => {
						return (<Poster item={item} />)
					})
				}
			</Layout>
		)
	}
}

function mapStateToProps(state) {
	const {
		isFetching,
		lastUpdated,
		moviesList: movies,
		tvProgramList: tvPrograms
	} = state || {
		isFetching: true,
		moviesList: [],
		tvProgramList: []
	}

	return {
		movies,
		isFetching,
		lastUpdated,
		tvPrograms
	}
}

export default connect(mapStateToProps)(IndexPage)