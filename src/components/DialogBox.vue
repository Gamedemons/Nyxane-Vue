<script setup>
const props = defineProps({
  godName: { type: String, required: true },
  tabInfo: {type: String, required: true}
})
</script>

<template>
<div id="dialoge_div">
  <img src="@/assets/resources/dialogue_box.png" alt="">
  <div id="god_name_holder">{{godName}}</div>
  <div id="entity_dialogue">
    {{tabInfo}}
  </div>
</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#dialoge_div {
  display: grid;
}

img {
  justify-self: end;
  position: absolute;
  bottom: 0;
  width: 800px;
}

#entity_dialogue {
  font-size: 1.5rem;
  font-weight: bold;
  word-wrap: break-word;
  padding: 20px 45px 10px 10px;
  background-color: transparent;
  width: 725px;
  height: 170px;
  justify-self: end;
  position: absolute;
  bottom: 37px;
}

#god_name_holder {
  position: absolute;
  font-size: 21px;
  display: grid;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
  top: 536px;
  left: 553px;
  height: 50px;
  width: 250px;
}
</style>