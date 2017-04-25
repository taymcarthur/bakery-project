import store from './Store/store'
import axios from 'axios'

export function addRecipe(recipe) {
	axios.post('http://localhost:3001/recipes').then(function(resp){

		store.dispatch({
			type: 'ADD_RECIPE',
			recipe: recipe
		})
	})
	
}