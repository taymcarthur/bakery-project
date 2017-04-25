const initialState = {
	recipes: []
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'ADD_RECIPE':
			return {...state, recipes:[...state.recipes, action.recipe]}
		default:
			return state
	}
}