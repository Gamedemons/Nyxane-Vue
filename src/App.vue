<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const theme = ref('dark')
const themeLink = ref('./assets/Logo/nyxane_low_')

function changeTheme() {
  if(theme.value === "light"){
    theme.value = 'dark'
  }else{
    theme.value = "light"
  }
}
const getImageUrl = (name) => {
  return new URL(`${name + theme.value}.png`, import.meta.url).href
}


</script>

<template>
<div>
  <nav>
    <div id="logo-img-wrapper" @click="changeTheme">
    <img id="logo-img" :src="getImageUrl(themeLink)" alt="">
    </div>
  </nav>
</div>
</template>

<style scoped>
#logo-img {
  width: 150px;
}
#logo-img-wrapper {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
