import React, { Component } from 'react'
import Layout from '../components/Layout'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { incrementTest } from '../../data/actions/movies'
// import { fetchTvPrograms } from '../../data/actions/tv'


class IndexPage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// fetchData();
		const { dispatch } = this.props
		dispatch(incrementTest())
		// dispatch(fetchTvPrograms(5))
	}

	render() {
		return (
			<Layout>
				<h2>Top Rated Movies</h2>
				{
					this.props.movies.list.map(item => {
						return (<Poster item={item} />)
					})
				}
				<h2>Top Rated TV Programs</h2>
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