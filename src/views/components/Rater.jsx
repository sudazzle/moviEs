import React, { Component } from 'react'
import Star from './images/star1.svg'
import styles from './styles/Rater.scss'

class Rater extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rateValue: 0,
			rate: [
				{
					isClicked: false,
					isHovered: false
				},
				{
					isClicked: false,
					isHovered: false
				},
				{
					isClicked: false,
					isHovered: false
				},
				{
					isClicked: false,
					isHovered: false
				},
				{
					isClicked: false,
					isHovered: false
				}
			]
		}

		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
		this.handleOnClick = this.handleOnClick.bind(this)
	}

	handleMouseEnter(e) {
		e.preventDefault()
		// let prevState = Array.from(this.state.rate)
		let newState = [
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			}
		]

		for(let i=0; i<e.target.dataset.rateValue; i++) {
			newState[i]['isHovered'] = true
		}
		this.setState({rate: newState})
	}

	handleMouseLeave(e) {
		e.preventDefault()
		let newState = Array.from(this.state.rate)
		for(let i=0; i<5; i++) {
			newState[i]['isHovered'] = false
		}

		for(let i=0;i<this.state.rateValue;i++) {
			newState[i]['isClicked'] = true
		}
		this.setState({rate: newState})
	}

	handleOnClick(e) {
		e.preventDefault()
		let newState = [
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			},
			{
				isClicked: false,
				isHovered: false
			}
		]
		let counter = e.target.dataset.rateValue ? e.target.dataset.rateValue : e.target.parentNode.dataset.rateValue
		
		for(let i=0; i<counter; i++) {
			newState[i]['isClicked'] = true
		}


		console.log(newState)
		console.log(e.target)
		console.log(e.target.parentNode)
		this.setState({rateValue: counter, rate: newState})
		console.log('rateValue', this.state)
	}

	render() {
		return(
			<div className={styles.raterWrapper}>
				<Star 
					data-rate-value={1}
					onClick={this.handleOnClick}
					onMouseLeave={this.handleMouseLeave}
					onMouseEnter={this.handleMouseEnter}
					className={this.state.rate[0].isClicked || this.state.rate[0].isHovered ? styles.raterHighlighted : styles.raterNonHighlighted} />
				<Star 
					data-rate-value={2}
					onClick={this.handleOnClick}
					onMouseLeave={this.handleMouseLeave}
					onMouseEnter={this.handleMouseEnter}
					className={this.state.rate[1].isClicked || this.state.rate[1].isHovered ? styles.raterHighlighted : styles.raterNonHighlighted} />
				<Star data-rate-value={3}
					onClick={this.handleOnClick}
					onMouseLeave={this.handleMouseLeave}
					onMouseEnter={this.handleMouseEnter}
					className={this.state.rate[2].isClicked || this.state.rate[2].isHovered ? styles.raterHighlighted : styles.raterNonHighlighted} />
				<Star data-rate-value={4}
					onClick={this.handleOnClick}
					onMouseLeave={this.handleMouseLeave}
					onMouseEnter={this.handleMouseEnter}
					className={this.state.rate[3].isClicked || this.state.rate[3].isHovered ? styles.raterHighlighted : styles.raterNonHighlighted} />
				<Star 
					data-rate-value={5}
					onClick={this.handleOnClick}
					onMouseLeave={this.handleMouseLeave}
					onMouseEnter={this.handleMouseEnter}
					className={this.state.rate[4].isClicked || this.state.rate[4].isHovered ? styles.raterHighlighted : styles.raterNonHighlighted} />
			</div>
		)
	}
}

export default Rater