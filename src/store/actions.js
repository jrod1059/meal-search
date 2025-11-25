import useAPI from "@/composables/useAPI";

const { api } = useAPI()

export function setSearchMeals({ commit }, keyword) {
    api.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
         commit('setSearchMeals', data.meals)
        
    })
    
}

export function searchMealsByLetter({ commit }, letter) {
    api.get(`search.php?f=${letter}`)
        .then(({ data }) => {
        commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({ commit }, Ingridients) {
    api.get(`filter.php?i=${Ingridients}`)
        .then(({ data }) => {
        commit('setMealsByIngredients', data.meals)
        })
}