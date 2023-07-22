<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const theme = ref('nyxane_low_dark')

function changeTheme() {
  theme.value = "nyxane_low_dark"
}


</script>

<template>
<div>
  <nav>
    <div id="logo-img-wrapper" @click="changeTheme">
    <img id="logo-img" :src="'@/assets/Logo/' + theme + '.png'" alt="">
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
