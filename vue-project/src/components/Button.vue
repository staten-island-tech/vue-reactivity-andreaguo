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
    font-size: 1.5rem;
    border-radius: 40px;
    border: none;
    background-color: rgba(80, 53, 14);
    color: rgb(223, 187, 141);
    transition: 0.3s;
    margin: 10px auto;
    margin-top: 3rem;
    padding: 3vh;
}
button:hover{
    transform: scale(1.1);
}
button:active{
    transform: scale(0.9);
}
</style>