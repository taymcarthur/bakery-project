import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Link, Route} from 'react-router-dom'
import RecipeForm from './RecipeForm'


class App extends Component {
  constructor(props) {
    super(props) 
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.props)
    this.props.history.Push('/addRecipe')
  }

  render() {
    return (
		   <div>
       <h1>This my recipe form, bitch.</h1>
        <Link to='/addRecipe'>Add Recipe</Link>
        <Route path="/addRecipe" component={RecipeForm} />
      </div>
    )
  }
}

export default App 