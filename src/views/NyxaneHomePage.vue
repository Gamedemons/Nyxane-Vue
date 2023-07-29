<script setup>
import {onMounted, ref} from 'vue'

const theme = ref('dark')
const menuActive = ref(false)
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

function toggleMenu() {
  menuActive.value = !menuActive.value;
}

// Normal js here
// js ends here

onMounted(() => {
  animateStars();

  // Cursor Circle Code
  let innerCursor = document.getElementById("inner-circle-" + theme.value)
  let outerCursor = document.getElementById("outer-circle")
  let spinPause = document.getElementById('spin-anim-pause-tag');
  spinPause.innerHTML = '.orbit { animation-play-state: Playing; }';

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
      innerCursor.classList.add("grow-" + theme.value)
      spinPause.innerHTML = '.orbit { animation-play-state: Paused; }';
    })
    entities.addEventListener("mouseleave", () => {
      innerCursor.classList.remove("grow-" + theme.value)
      spinPause.innerHTML = '.orbit { animation-play-state: Playing; }';
    })
  })
})
</script>


<template>
  <div>
    <div :id="`inner-circle-` + theme" class="cursor-circle"></div>
    <div id="outer-circle" class="cursor-circle"></div>

    <nav id="nav-bar">
      <div id="logo-img-wrapper" @click="changeTheme">
        <img v-show="theme==='dark'" id="logo-img" src="@/assets/Logo/nyxane_svg_dark.svg" alt="Nyxane">
        <img v-show="theme==='light'" id="logo-img" src="@/assets/Logo/nyxane_svg_light.svg" alt="Nyxane">
      </div>
      <div id="nav-menu" @click="toggleMenu">
        <div id="menuButton" class="hamburger" :class="{isactive: menuActive }">
          <span class="menuline"></span>
          <span class="menuline"></span>
          <span class="menuline"></span>
        </div>
      </div>
    </nav>

    <section id="planetary_system">
      <div id="stars_pane">
        <div v-for="bg_star in bg_starList" :key="bg_star.id" class="bg_stars"
             :style="{top:bg_star.top, left:bg_star.left}"></div>
      </div>
      <div id="container">

        <div id="ring0" class="orbit">
          <router-link class="nav-link entity" :to="{name : 'games-page'}">
            <div id="planet0" class="entity"></div>
          </router-link>

          <div id="ring1" class="orbit">
            <router-link class="nav-link entity" :to="{name : 'void-page'}">
              <div id="planet1" class="entity"></div>
            </router-link>

            <div id="ring2" class="orbit">
              <router-link class="nav-link entity" :to="{name : 'anime-page'}">
                <div id="planet2" class="entity">
                  <div id="p2_moon" class="entity"></div>
                </div>
              </router-link>

              <div id="ring3" class="orbit">
                <router-link class="nav-link entity" :to="{name : 'music-page'}">
                  <div id="planet3" class="entity"></div>
                </router-link>

                <div id="ring4" class="orbit">
                  <router-link class="nav-link entity" :to="{name : 'extras-page'}">
                    <div id="planet4" class="entity"></div>
                  </router-link>

                  <!--Center Star ( Black )-->
                  <router-link class="nav-link-star" :to="{name : 'github-page'}">
                    <div id="star" class="entity">
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



/* Navbar styles */
#nav-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#nav-menu {
  display: grid;
  justify-self: right;
  align-self: center;
}

#logo-img-wrapper {
  margin-top: 10px;
  margin-left: 10px;
}
#logo-img {
  width: 200px;
}

#menuButton {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#menuButton.isactive {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

#menuButton:before {
  content: "";
  position: absolute;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  border: 5px solid transparent;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#menuButton.isactive:before {
  border: 5px solid #ecf0f1;
}

.menuline {
  width: 50px;
  height: 5px;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#menuButton.isactive .menuline {
  width: 35px;
}
#menuButton.isactive .menuline:nth-child(1) {
  -webkit-transform: translateY(13px);
  -ms-transform: translateY(13px);
  transform: translateY(13px);
}
#menuButton.isactive .menuline:nth-child(2) {
  opacity: 0;
}
#menuButton.isactive .menuline:nth-child(3) {
  -webkit-transform: translateY(-13px) rotate(90deg);
  -ms-transform: translateY(-13px) rotate(90deg);
  transform: translateY(-13px) rotate(90deg);
}



/* Planetary System */
@keyframes spin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

#planetary_system {
  display: grid;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

#container {
  scale: 1;
  padding: 20px;
}

#star {
  background: black;
  box-shadow: 0px 0px 60px -5px #F2F2F2FF;
  overflow: hidden;
  align-self: center;
  height: calc(var(--sun-radius) * var(--planet-size-multiplier));;
  width: calc(var(--sun-radius) * var(--planet-size-multiplier));;
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
  border-radius: var(--planet-border-radius);
  display: grid;
  position: absolute;
  justify-self: center;
}
.entity:hover {
  scale: 1.05;
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
  z-index: 9999;
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
  animation: spin 10s infinite linear;
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
#p2_moon {
  height: 4px;
  width: 4px;
  background-color: chartreuse;
  justify-self: center;
  position: absolute;
  top: -7px;
}

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



/* Cursor styles */
.cursor-circle {
  position: fixed;
  left: 10px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
}

/* Light Theme Cursor ***************************/
#inner-circle-light {
  height: 10px;
  width: 10px;
  background-color: white;
  transition: width 0.5s, height 0.5s;
}
#inner-circle-light.grow-light {
  height: 30px;
  width: 30px;
  transition: width 0.5s, height 0.5s;
  opacity: 0.5;
}

/* Dark Theme Cursor ****************************/
#inner-circle-dark {
  height: 10px;
  width: 10px;
  background-color: white;
  mix-blend-mode: difference;
  transition: width 0.5s, height 0.5s;
}
#inner-circle-dark.grow-dark {
  height: 30px;
  width: 30px;
  transition: width 0.5s, height 0.5s;
  opacity: 0.8;
}

#outer-circle {
  height: 30px;
  width: 30px;
  border: 1px solid white;
  transition: 0.1s;
}

</style>