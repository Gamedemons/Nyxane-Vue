<script setup>
import {onMounted, ref} from 'vue'

const theme = ref('dark')
const bg_starList = ref([]);

function createStar() {
  const newStar = {
    id: Date.now(),
    top: Math.random() * window.innerHeight + "px",
    left: Math.random() * window.innerWidth + "px",
    func: setTimeout
  }
  bg_starList.value.push(newStar)
  setTimeout(() => {
    bg_starList.value.shift();
  }, 10000);
}

function animateStars() {
  setInterval(() => {
    createStar();
  }, 200);
}

function changeTheme() {
  if (theme.value === "light") {
    theme.value = 'dark'
  } else {
    theme.value = "light"
  }
}

// Normal js here

// js ends here

onMounted(() => {
  animateStars();

  // Cursor Circle Code
  let innerCursor = document.getElementById("inner-circle")
  let outerCursor = document.getElementById("outer-circle")
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
  })
  let hoverableEntities = Array.from(document.getElementsByClassName("entity"))
  hoverableEntities.forEach((entities) => {
    entities.addEventListener("mouseover", () => {
      innerCursor.classList.add("grow")
    })
    entities.addEventListener("mouseleave", () => {
      innerCursor.classList.remove("grow")
    })
  })

})
</script>


<template>
  <div>
    <div id="inner-circle" class="cursor-circle"></div>
    <div id="outer-circle" class="cursor-circle"></div>
    <nav>
      <div id="logo-img-wrapper" @click="changeTheme">
        <img v-if="theme==='dark'" id="logo-img" src="@/assets/Logo/nyxane_low_dark.png" alt="">
        <img v-else id="logo-img" src="@/assets/Logo/nyxane_low_light.png" alt="">
      </div>
    </nav>
    <section id="planetary_system">
      <div id="stars_pane">
        <div v-for="bg_star in bg_starList" :key="bg_star.id" class="bg_stars"
             :style="{top:bg_star.top, left:bg_star.left}"></div>
      </div>
      <div id="container">

        <div id="ring0" class="orbit">
          <router-link class="nav-link entity" to="/games">
            <div id="planet0" class="entity"></div>
          </router-link>

          <div id="ring1" class="orbit">
            <router-link class="nav-link entity" to="/void">
              <div id="planet1" class="entity"></div>
            </router-link>

            <div id="ring2" class="orbit">
              <router-link class="nav-link entity" to="/anime">
                <div id="planet2" class="entity"></div>
              </router-link>

              <div id="ring3" class="orbit">
                <router-link class="nav-link entity" to="/music">
                  <div id="planet3" class="entity"></div>
                </router-link>

                <div id="ring4" class="orbit">
                  <router-link class="nav-link entity" to="/extras">
                    <div id="planet4" class="entity"></div>
                  </router-link>

                  <!--Center Star ( Black )-->
                  <router-link class="nav-link-star" to="/github">
                    <div id="star">
                      <!--<img src="@/assets/resources/aqual.svg" alt="">-->
                    </div>
                  </router-link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
* {
  cursor: none;
}

#planetary_system {
  display: grid;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

#logo-img {
  width: 200px;
}

#logo-img-wrapper {
  margin-top: 10px;
  margin-left: 10px;
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
  padding: 20px;
}

#star {
  /*border: 1px solid black;*/
  background: black;
  overflow: hidden;

  border-radius: 50%;
  height: calc(var(--sun-radius) * var(--planet-size-multiplier));;
  width: calc(var(--sun-radius) * var(--planet-size-multiplier));;

  position: absolute;
  justify-self: center;
  align-self: center;

  box-shadow: 0px 0px 60px -5px #F2F2F2FF;
}

#star img {
  width: 165px;
  position: relative;
  justify-self: center;
  align-self: center;
  top: -9px;
  left: -12px;
}


/* Common properties for rings and planets (orbit and planets respectively) */
.orbit {
  border: 1px solid rgba(255, 255, 255, 15%);
  border-radius: var(--planet-border-radius);
  position: relative;

  display: grid;
  justify-self: center;
  align-self: center;

  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 50s;
}

.entity {
  /*border: 1px solid black;*/
  border-radius: var(--planet-border-radius);
  position: absolute;
  justify-self: center;
}

.entity:hover {
  scale: 1.1;
  box-shadow: 0px 0px 30px -5px white;
}


/* Rings */
#ring0 {
  width: calc(var(--planet-orbit-radius) * var(--orbit-size-multiplier));
  height: calc(var(--planet-orbit-radius) * var(--orbit-size-multiplier));
  animation-duration: calc((var(--planet-anim-duration) * var(--planet-anim-speed)) / var(--planet-anim-master-speed));
}

#ring1 {
  width: calc(var(--planet-orbit-radius1) * var(--orbit-size-multiplier));
  height: calc(var(--planet-orbit-radius1) * var(--orbit-size-multiplier));
  animation-duration: calc((var(--planet-anim-duration1) * var(--planet-anim-speed1)) / var(--planet-anim-master-speed));
}

#ring2 {
  width: calc(var(--planet-orbit-radius2) * var(--orbit-size-multiplier));
  height: calc(var(--planet-orbit-radius2) * var(--orbit-size-multiplier));
  animation-duration: calc((var(--planet-anim-duration2) * var(--planet-anim-speed2)) / var(--planet-anim-master-speed));
}

#ring3 {
  width: calc(var(--planet-orbit-radius3) * var(--orbit-size-multiplier));
  height: calc(var(--planet-orbit-radius3) * var(--orbit-size-multiplier));
  animation-duration: calc((var(--planet-anim-duration3) * var(--planet-anim-speed3)) / var(--planet-anim-master-speed));
}

#ring4 {
  animation-direction: reverse;
  width: calc(var(--planet-orbit-radius4) * var(--orbit-size-multiplier));
  height: calc(var(--planet-orbit-radius4) * var(--orbit-size-multiplier));
  animation-duration: calc((var(--planet-anim-duration4) * var(--planet-anim-speed4)) / var(--planet-anim-master-speed));
}


/* Planets */
#planet0 {
  background-color: var(--planet-color);
  width: calc(var(--planet-radius) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet0:hover {
  box-shadow: 0px 0px 30px 5px var(--planet-color);
}

#planet1 {
  background-color: var(--planet-color1);
  width: calc(var(--planet-radius1) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius1) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift1) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet1:hover {
  box-shadow: 0px 0px 30px 0px var(--planet-color1);
}

#planet2 {
  background-color: var(--planet-color2);
  width: calc(var(--planet-radius2) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius2) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift2) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet2:hover {
  box-shadow: 0px 0px 20px 5px var(--planet-color2);
}

#planet3 {
  background-color: var(--planet-color3);
  width: calc(var(--planet-radius3) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius3) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift3) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet3:hover {
  box-shadow: 0px 0px 30px 10px var(--planet-color3);
}

#planet4 {
  background-color: var(--planet-color4);
  width: calc(var(--planet-radius4) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius4) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift4) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet4:hover {
  box-shadow: 0px 0px 30px 5px var(--planet-color4);
}

/* animation: spin 3s infinite;  Can be added to planets for subclass or moons */

#stars_pane {
  height: 100%;
}

.bg_stars {
  position: absolute;
  height: 2px;
  width: 2px;
  background-color: white;
}

.nav-link-star {
  text-decoration: none;
  display: grid;

  border-radius: 50%;
  height: calc(var(--sun-radius) * var(--planet-size-multiplier));;
  width: calc(var(--sun-radius) * var(--planet-size-multiplier));;

  position: absolute;
  justify-self: center;
  align-self: center;
}

.nav-link {
  text-decoration: none;
  display: grid;
}


/*.cursor-circle{
  position: fixed;
  left: 10px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
}
#inner-circle {
  height: 10px;
  width: 10px;
  background-color: white;
  !*mix-blend-mode: difference;*!
  transition: width 0.5s, height 0.5s;
}
#inner-circle.grow {
  height: 30px;
  width: 30px;
  transition: width 0.5s, height 0.5s;
  opacity: 0.5;
}
#outer-circle {
  height: 30px;
  width: 30px;
  border: 1px solid white;
  mix-blend-mode: difference;
  transition: 0.1s;
}*/
.cursor-circle{
  position: fixed;
  left: 10px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
}
#inner-circle {
  height: 10px;
  width: 10px;
  background-color: white;
  mix-blend-mode: difference;
  transition: width 0.5s, height 0.5s;
}
#inner-circle.grow {
  height: 30px;
  width: 30px;
  transition: width 0.5s, height 0.5s;
  opacity: 0.8;
}
#outer-circle {
  height: 30px;
  width: 30px;
  border: 1px solid white;
  mix-blend-mode: difference;
  transition: 0.1s;
}
</style>