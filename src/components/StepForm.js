import React, {Component} from 'react'

class StepForm extends Component {
	constructor (props) {
		super(props)
		this.state = {
			directions: this.props.directions
		}

	}
	handleChange = (e) => {
	this.setState({
		[e.target.name]:e.target.value
	})
	this.props.updateStep(this.props.index, this.state.directions)
 }

	render () {
		return (
			<div>
			<textarea value={this.state.directions} placeholder="Step Directions" name="directions" onChange={this.handleChange}></textarea>
			</div>
		)
	}
}

export default StepForm

