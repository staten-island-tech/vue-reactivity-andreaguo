<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img class="topping" :src="image" alt="">
        <h3>{{ price }}</h3>
        <input type="checkbox" id="topping" :value="title" v-model="selected" @click="store.array.push(title)"/>
      <label :for="title"> {{ title }} </label>
      <span>selected{{ selected }}</span>
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
        title: String,
        price: Number,
        image: String,
    },
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
