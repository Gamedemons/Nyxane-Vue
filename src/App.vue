<script setup>
/*import {RouterLink, RouterView} from 'vue-router'*/
import {ref} from 'vue'
import NyxaneHomePage from "@/views/NyxaneHomePage.vue";

const theme = ref('dark')

function changeTheme() {
  if (theme.value === "light") {
    theme.value = 'dark'
  } else {
    theme.value = "light"
  }
}

/*const getImageUrl = (name) => {
  return new URL(`${name + theme.value}.png`, import.meta.url).href
}*/
</script>

<template>
  <div>
    <nav>
      <div id="logo-img-wrapper" @click="changeTheme">
        <img v-if="theme==='dark'" id="logo-img" src="@/assets/Logo/nyxane_low_dark.png" alt="">
        <img v-else id="logo-img" src="@/assets/Logo/nyxane_low_light.png" alt="">
      </div>
    </nav>
    <section>
      <NyxaneHomePage></NyxaneHomePage>
    </section>
  </div>
</template>


<style scoped>
#logo-img {
  width: 200px;
}

#logo-img-wrapper {
  margin-top: 10px;
  margin-left: 10px;
}


</style>
