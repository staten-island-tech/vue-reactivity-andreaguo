<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" placeholder="edit me" v-model="message"/>
    <p>{{ message }}</p>
    <div class="checkbox">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
    <label for="mike">Mike</label>
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
}
.checkbox{
  margin: 1rem;
}
#jack, #john, #mike{
  margin: 0.5rem;
}
</style>