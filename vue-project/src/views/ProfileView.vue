<template>
    <h1 v-if="selected === 'pink'">Correct Answer</h1>
    <h1 v-else-if="selected === ''">Select an answer</h1>
    <h1 v-else>"Wrong"</h1>
    <h1>{{ student }}</h1>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
    <select v-model="selected">
      <option>pink</option>
      <option>purple</option>
      <option>blue</option>
    </select>
    <span>{{ selected }}</span>
  </template>
  
  <script scoped>
  export default {
    data() {
      return {
        student: "Madison Meccia",
        animals: ["pig", "cow", "kwan", "Zee"],
        graduated: true,
        selected: "",
      };
    },
    methods: {},
  };
  </script>
  <style scoped>
  h1{
  color: blueviolet;
  }
  
  </style>