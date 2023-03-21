<script>
  const items = [
    {name: "thing1",
    value: 10,
    type: "orange",
    effective: true,
    worth: 21
  },
  {name: "thing2",
    value: 12,
    type: "red",
    effective: false,
    worth: 54
  },
  {
    name: "thing3",
    value: 23,
    type: "blue",
    effective: true,
    worth: 17
  }
  ]
function work(){
  items.forEach((el)=> console.log(el.value))
}
</script>