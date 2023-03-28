<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img class="topping" :src="image" alt="">
        <h3>{{ price }}</h3>
        <input type="checkbox" id="topping" :value="title" v-model="checkedNames"/>
      <label :for="title"> {{ title }} </label>
    </div>
</template>

<script>
export default{
    name:"card",
    props: {
        title: String,
        price: Number,
        image: String,

    },
}
</script>

<style>
.card{
    width: 30%;
    background-color: bisque;
    height:300px;
    margin: 10px auto;
    color: rgb(150, 95, 23);
    font-size: 1.5vh;
    padding: 1rem;
}
img{
    height: 10vh;
}
</style>
