 <template>
    <div class="card">
        <h2>{{ ingredient.name }}</h2>
        <input type="checkbox" id="checkbox" :value="ingredient.title" v-model="selected" @click="remove(ingredient)"/>
        <label :for="ingredient.title"> {{ ingredient.title }} </label>
        <img class="topping" :src="ingredient.img" alt="">
        <h3>${{ ingredient.price }}</h3>

        <!-- <checkbox @selection="remove"></checkbox> -->
    </div>

</template>

<script>
import { store } from '../store.js'
// import checkbox from "./checkbox.vue"

export default{
    name:"card",
    data(){
        return{
            store,
            selected: [],
        };
    },
    // components:{
    //     checkbox,
    props: {
        ingredient: Object,
    },
    methods: {
        remove: function(topping){
            const array = store.array
            console.log(array.includes( ))
            if (array.includes(topping)) {
                let index = array.indexOf(topping)
                array.splice(index, 1)
                console.log(array)
            } else {
                array.push(topping)
            }
        }
    }
}
</script>

<style>
.card{
    width: 45%;
    background-color: bisque;
    height:300px;
    margin: 10px auto;
    color: rgb(150, 95, 23);
    font-size: 2vh;
    padding: 1rem;
    border-radius: 15px;
}
img{
    height: 10vh;
}

</style>
