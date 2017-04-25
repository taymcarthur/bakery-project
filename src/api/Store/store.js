import {createStore} from 'redux'
import recipeReducer from '../reducer/Recipes'



const store = createStore(recipeReducer)

export default store