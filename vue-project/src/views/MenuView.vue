<template>
  <div class="about">
    <h1>Place your order here:</h1>
    <div class="checkbox">
    <input type="checkbox" id="protein" value="Chicken" v-model="checkedNames"/>
    <label for="chicken"> Chicken </label>
    <input type="checkbox" id="protein" value="Steak" v-model="checkedNames"/>
    <label for="steak"> Steak </label>
    <input type="checkbox" id="protein" value="Barbacoa" v-model="checkedNames"/>
    <label for="barbacoa"> Barbacoa </label>
    <input type="checkbox" id="protein" value="Carnitas" v-model="checkedNames"/>
    <label for="carnitas"> Carnitas </label>
    <input type="checkbox" id="protein" value="Sofritas" v-model="checkedNames"/>
    <label for="sofritas"> Sofritas </label>
    <br/>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
  </div>
</template>

<script>

export default{
  name: 'about',
  components: {},
  data(){
    return{
      selected: '',
    };
  },
  computed: {
    now: function(){
      const time = new Date();
      return `${time.getHours()}:${time.getMinutes()}`;
    },
  },
  methods: {},
}
</script>



<style scoped>
h1{
  color: cornflowerblue;
  font-size: 1.5rem;
}
.checkbox{
  margin-right: 1rem;
}
#protein{
  margin: 0.5rem;
}
</style>