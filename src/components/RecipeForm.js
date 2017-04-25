import React, {Component} from 'react'
import { addRecipe } from '../api/recipes'
import StepForm from './StepForm'

class RecipeForm extends Component {
	constructor (props) {
		super ()
		this.state = {
			"name":"",
			"by":"",
			"steps":[
			{
				"directions":""
				}
		  	]
		}

	}
	handleChange =(e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	updateStep = (index, directions) => {
		this.setState({
			steps: this.state.steps.map((step, i) => {
				if (i === index) {
					return {directions} 
				} else {
					return step 
				}
			})

		})
	}
	addStep = (e) => {
		this.setstate({
			steps: [...this.state.steps, {"directions":""}]
		})

	}
	saveRecipe = (e) => {
		addRecipe(this.state)
		this.setState({
			"name":"",
			"by":"",
		})
	}
	saveRecipe = (e) => {
		addRecipe(this.state)
		this.setState({
			"name":"",
			"by":""
		})
	}
	render() {
		return (
			<div>
			<input placeholder="Recipe Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
			<input placeholder="by" type="text" name="by" value={this.state.by} onChange={this.handleChange} />
			{this.state.steps.map((step, i) => (
				<StepForm step={step} index={i} updateStep={this.updateStep} />
				))}
			<textarea value={this.state.directions} placeholder="Step Directions" name="directions" onChange={this.handleChange}></textarea>
			<button onClick={this.addStep}>Add Step</button>
			<button onClick={this.saveRecipe}>Save this recipe</button>
			</div>
		)
	}
}

export default RecipeForm