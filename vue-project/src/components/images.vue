<template>
    <div class="images">
    <img class="bowl" src="https://store.worldcentric.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Kilimanjaro/Development/img/items/BO-SC-UBB-P_02.png?resizeid=2&resizeh=175&resizew=175" alt="">
    <img class="chosen" src="https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5002-brown-rice/web-mobile/order.png" alt="">
    <img class="chosentwo" src="https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5002-brown-rice/web-mobile/order.png" alt="">
    <img class="chosenthree" src="https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5002-brown-rice/web-mobile/order.png" alt="">
    <img class="chosenfour" src="https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5052-pinto-beans/web-mobile/order.png" alt="">
    <img class="chosenfive" src="https://www.chipotle.fr/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/chicken/primary/chicken.png" alt="">
</div>
</template>



<script>
export default{
    name: "images",
    // props: {
    //     img: String,
    // },
}
</script>

<style>
.images {
  position: relative;
  top: 0;
  left: 0;
}
.bowl{
    position: relative;
  height: 20rem;
  top: 0;
  left: 0;
  /* display: flex;
  align-items: center; */
  z-index: 3;
}

.chosen {
    position: absolute;
    top: 70px;
    left: 20px;
    height: 10rem;
  z-index: 3;
}
.chosentwo {
    position: absolute;
    top: 70px;
    left: 130px;
    height: 10rem;
  z-index: 3;
}
.chosenthree{
    position: absolute;
    top: 80px;
    left: 80px;
    height: 10rem;
  z-index: 3;
}
.chosenfour{
    position: absolute;
    top: 80px;
    left: 80px;
    height: 10rem;
  z-index: 3;
}
.chosenfive{
    position: absolute;
    top: 80px;
    left: 80px;
    height: 10rem;
  z-index: 3;   
}
</style>