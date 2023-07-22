<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {ref, onMounted} from 'vue'

const theme = ref('dark')
const themeLink = ref('./assets/Logo/nyxane_low_')

function changeTheme() {
  if (theme.value === "light") {
    theme.value = 'dark'
  } else {
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
    <section>
      <div id="container">
        <div id="ring">
          <div id="planet"></div>
        </div>
        <div id="ring1">
          <div id="planet1"></div>
        </div>
      </div>
    </section>
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

body {

}

@keyframes spin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

#container {
  scale: 1;
}

#ring {
  border: 1px solid rgba(255, 255, 255, 0.344);
  width: var(--planet-orbit-radius);
  height: var(--planet-orbit-radius);
  border-radius: var(--planet-border-radius);
  position: relative;
  //top: 200px;
  //left: 200px;
  display: grid;
  animation: spin 3s infinite linear;
}

#planet {
  background-color: aquamarine;
  border: 1px solid black;
  width: var(--planet-radius);
  height: var(--planet-radius);
  border-radius: var(--planet-border-radius);
  position: relative;
  top: -11.5px;
  justify-self: center;
  /* animation: spin 3s infinite; */
}

#ring1 {
  border: 1px solid rgba(255, 255, 255, 0.344);
  width: var(--planet-orbit-radius1);
  height: var(--planet-orbit-radius1);
  border-radius: var(--planet-border-radius);
  position: relative;
  top: -177.5px;
  left: 25px;
  display: grid;
  animation: spin 9s infinite linear;
}

#planet1 {
  background-color: aliceblue;
  border: 1px solid black;
  width: var(--planet-radius1);
  height: var(--planet-radius1);
  border-radius: var(--planet-border-radius);
  position: relative;
  top: 25.5px;
  left: 64px;
  justify-self: center;
  /* animation: spin 3s infinite; */
}
</style>
