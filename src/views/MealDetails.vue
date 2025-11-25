<script setup>
import { onMounted, ref } from 'vue';
import useAPI from '@/composables/useAPI';
import { useRoute } from 'vue-router';

const { api } = useAPI()
const route = useRoute()
const meal = ref({})

onMounted(() => {
    api.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})

</script>

<template>
    <div class="m-10">
        <!-- {{ meal }} -->
        <h1 class="text-5xl font-bold mb-10">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" class="max-ww[25%] mb-10"/>
        <p clas="mb-10">{{ meal.strInstructions }}</p>

        <ul >
            <li v-for="i in 20 " :key="i" v-if="meal['strIngredient' + i] !== ''">
                {{ i }}. {{ meal['strIngredient' + i] }}
            </li>

        </ul>
    </div>
    
</template>