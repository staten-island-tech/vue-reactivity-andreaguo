<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img :src="image" alt="">
        <h3>{{ price }}</h3>
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
    height:200px;
    margin: 10px auto;
    color: rgb(150, 95, 23);
    font-size: 1.5vh;
    padding: 1rem;
}
img{
    height: 10vh;
}
</style>