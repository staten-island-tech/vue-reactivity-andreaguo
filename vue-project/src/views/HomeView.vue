<template>
  <header>
    <h1 class="welcome">WELCOME</h1>
  </header>


  <!-- <h2>{{ now }}</h2>
  <Button @test-click="hello">day</Button>
  <Button @test-click="bye">night</Button> -->

</template>

<script>
import Button from "../components/Button.vue"
export default {
  name: "home",
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
header{
  position: relative;
  height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header::before{
  content:"";
  background-image: url('https://cdn.vox-cdn.com/thumbor/IgTjvMMfD-LBxQFSMNE6NXOeFL4=/0x0:3008x2000/1200x800/filters:focal(1264x760:1744x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65831693/shutterstock_1306226335.0.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 50%

}

.welcome{
  position: relative;
  color: white;
  font-size: 5rem;
  text-shadow: black 1px 0 10px;  
  text-align: center;


}
</style>