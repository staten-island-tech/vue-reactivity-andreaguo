<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img class="topping" :src="image" alt="">
        <h3>{{ price }}</h3>
        <input type="checkbox" id="topping" :value="title" v-model="selected"/>
      <label :for="title"> {{ title }} </label>
      <span>{{ selected }}</span>
    </div>
</template>

<script>
export default{
    name:"card",
    data(){
        return{
            selected:[],
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
    height:200px;
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
