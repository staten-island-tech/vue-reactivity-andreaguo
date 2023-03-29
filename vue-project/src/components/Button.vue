<template>
<button @click="$emit('test-click')"><slot></slot> </button>
</template>

<script>
export default{
    name: "button",
}
</script>

<style scoped>
button{
    width: 200px;
    font-size: 30px;
    border-radius: 20px;
    border: none;
    background-color: rosybrown;
    color: rgb(100, 44, 44);
    transition: 0.3s;
}
button:hover{
    transform: scale(1.1);
}
button:active{
    transform: scale(0.6);
}
</style>