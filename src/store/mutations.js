export function setSearchMeals(state, meals) {
    state.seachMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
    state.meaksByIngredient = meals || []
}