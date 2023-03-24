<template>
  <h1>Welcome</h1>
  <h1 v-if="selected === 'Pick Up'">Correct Answer</h1>
  <h1 v-else-if="selected === ''">Select an answer</h1>
  <h1 v-else>"Wrong"</h1>
  <h1>{{ student }}</h1>
  <ul>
    <li v-for="animal in animals" :key="animal">{{ animal }}</li>
  </ul>
  <select v-model="selected">
    <option>Pick Up</option>
    <option>Delivery</option>
    <option>Dine in</option>
  </select>
  <span>{{ selected }}</span>
</template>

<script>
export default {
  data() {
    return {
      student: "Jason",
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
color: burlywood;
}

</style>