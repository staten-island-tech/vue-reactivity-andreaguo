<template>
<button @click="$emit('test-click')"><slot></slot> </button>
</template>

<script>
export default{
    name: "Button",
}
</script>

<style scoped>
button{
    width: 200px;
    font-size: 30px;
    border-radius: 15px;
    border: none;
    background-color: rosybrown;
    color: rgb(100, 44, 44);
    transition: 0.3s;
    margin: 10px auto;
}
button:hover{
    transform: scale(1.1);
}
button:active{
    transform: scale(0.9);
}
</style>