<template>
        <input type="checkbox" id="topping" :value="title" v-model="selected" @click="$emit('selection')"/>
        <label :for="title"> {{ title }} </label>
        <div>
        <span>checked: {{ selected }}</span>
    </div>
</template>

<script>
export default{
    name: 'checkbox',
    props: {
        title: String,
    },
    data(){
        return{
            selected: []
        }
    },
};
</script>