<template>
  <h1>Welcome</h1>
  <h1 v-if="selected === 'Pick Up'">Correct Answer</h1>
  <h1 v-else-if="selected === ''">Select an answer</h1>
  <h1 v-else>"Wrong"</h1>
  <h1>{{ student }}</h1>

  <select v-model="selected">
    <option>Pick Up</option>
    <option>Delivery</option>
    <option>Dine in</option>
  </select>
  <span>{{ selected }}</span>

  <h2>{{ now }}</h2>
  <Button @test-click="hello">day</Button>
  <Button @test-click="bye">night</Button>

</template>

<script>
import Button from "../components/Button.vue"
export default {
  data() {
    return {
      student: "Jason",
      graduated: true,
      selected: "",
    };
  },
  components: {
    Button,
  },
  computed: {
    now: function(){
      const time= new Date();
      return `${time.getHours()}: ${time.getMinutes()}`
    }
  },
  methods: {
    hello: function(){
      alert('hello');
    },
    bye: function(){
      alert('goodbye')
    }
  },
};
</script>
<style scoped>
h1{
color: burlywood;
}

</style>