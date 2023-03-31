 <template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img class="topping" :src="image" alt="">
        <h3>{{ price }}</h3>
        <input type="checkbox" id="topping" :value="title" v-model="selected" @click="store.array.push(title)"/>
        <label :for="title"> {{ title }} </label>
        <!-- <checkbox @selection="remove"></checkbox> -->
        <div>
        <span>checked: {{ selected }}</span>
    </div>
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
        title: String,
        price: Number,
        image: String,
    },
    methods: {
        remove: function(){
            const array = store.array
            if (array.includes(selected)) {
                let index = array.indexOf(selected)
                array.splice(index, 1)
                console.log(array)
            } else {
                array.push(selected)
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
