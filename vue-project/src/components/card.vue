 <template>
    <div class="card">
        <h2>{{ ingredient.name }}
        <input type="checkbox" id="checkbox" :value="ingredient.title" @click="remove(ingredient)"/>
        <label :for="ingredient.title"> {{ ingredient.title }} </label>
        </h2>
        <img :src="ingredient.img" alt="">
        <h3>${{ ingredient.price }}</h3>

    </div>

</template>

<script>
import { store } from '../store.js'

export default{
    name:"card",
    data(){
        return{
            store,
        };
    },
    props: {
        ingredient: Object,
    },
    methods: {
        remove: function(ingredient){
            const array = store.array
            console.log(array.includes( ))
            if (array.includes(ingredient)) {
                let index = array.indexOf(ingredient)
                array.splice(index, 1)
                console.log(array)
            } else {
                array.push(ingredient)
            }
        }
    }
}
</script>

<style>
.card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    background-color: rgba(80, 53, 14, 0.95);
    height: 30vh;
    margin: 10px auto;
    color: rgb(223, 187, 141);
    font-size: 1rem;
    padding: 1rem;
    border-radius: 15px;
}
img{
    height: 12vh;
}
@media (min-width: 1024px) {
    .card{
        margin: 1vh auto;
    }
}
</style>
