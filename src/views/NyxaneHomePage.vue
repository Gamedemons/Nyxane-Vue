<script setup>
import {onMounted, reactive, ref} from 'vue'
import DialogBox from "@/components/DialogBox.vue";

const theme = ref('dark')
const menuActive = ref(false)
const bg_starList = ref([]);
const currentTabHovered = ref("none")
const currentTabValues = reactive({
  tabName: "",
  godName: "",
  godNickname: "",
  tabImageUrl: "",
  tabInfo: ""
})

let godData = {
  p1_link: {
    tabName: "games",
    godName: "Zagreus",
    godNickname: "Fate Breaker",
    tabImageUrl: "../assets/resources/zagreus.png",
    dialogCount: 0,
    tabInfo: [
        "Greetings friend ! I'm Zagreus, the god of Disboard. What is Disboard you ask ?? Well it a world of games, everything you do or see is related to games somehow. Ah ! I nearly forgot, Welcome to the world of Disboard my firend.",
        "Is there anything more you would like to ask ? My background ?? Sure... no problems, I am from the game Hades. You should try it sometime, I feel like you will find it very enjoyable to play.",
        "Oh ! I did not see coming. So you're back, what's wrong ? Wait you lost your way... Haha now that's hilarious. I think we will get along quite well.",
        "Hey there how is it going ?",
        "Looking as good as ever I see.",
        "You are asking me how I got so strong ? Well that's by dying a lot of times ( I'm not kidding ! )",
        "You know I once fought the three fury sisters of underworld alone. The result ? I won of course...",
        "Take a breather mate, you have been running around a lot lately",
        "Have you seen a flatboard witch somewhere around here... I swear I saw her running in this direction.",
        "Hello friend. Have you met Gojou from the Void realm yet ? He's cheeky but is a nice friend nonetheless.",
        "You lost your way again, man you sure have it hard huh...",
        "Hey there buddy, I hope you are having a fine day."

    ],
    isHelper: false,
  },
  p2_link: {
    tabName: "void",
    godName: "Shallow Vernal",
    godNickname: "The Epilogue",
    tabImageUrl: "../assets/resources/nyx.webp",
    dialogCount: 0,
    tabInfo: [
        "Hello child. This is the void realm. Im Shallow Vernal, the creator of this realm. You are free to wander if you want.",
        "The great overseer is currently busy thinking about the incomprehensibly complex problems of the void realm ( Even though she seems to be looking at you ).",
        "You're asking me if I am interested in you ? Well I already have my Kaito san so I dont need anyone else.",
        "The great overseer spends her day as peacefully as ever.",
        "Did you have a good time ?"
    ],
    isHelper: true,
    helper: {
      tabName: "void",
      godName: "Gojou Satoru",
      godNickname: "Keeper of the Infinity",
      tabImageUrl: "../assets/resources/chaos.webp",
      dialogCount: 0,
      tabInfo: [
          "You mesmerised yet ? Of course you are, Megumi chan look another one has fallen to my charms...",
          "You like my headband, thanks !",
          "Ah ! I was just doing my own thing, dont ming me.",
          "Its such a pain cleaning up the afermath of the cursed spirits, and that's why i have Nanami.",
          "Make sure you dont create any problems around here or I'll kill you okay hehehe...",
          "Wow... We meet again. Wait let me think what was our name again... Nah I forgot.",
          "Have you eaten the steamed buns I bought from kyoto, they are just the best.",
          "Do I look good ?",
          "This aura around me ? That's cursed energy, but dont worry its safe.",
          "How do we keep meeting again and again despite me being so busy. You must be one of my stalker fans then. It's okay I wont judge...",
      ],
      isHelper: false,
    }
  },
  p3_link: {
    tabName: "anime",
    godName: "Rimuru Tempest",
    godNickname: "Chaos Creator",
    tabImageUrl: "../assets/resources/nyx.webp",
    dialogCount: 0,
    tabInfo: [
        "Hey ! I'm Rimuru Tempest, the founder of Tempest Nation and the god of Animon and this here is my friend Senkuu Ishigami. I'm ten billion percent sure you would have heard of him. If not, you just might be living under a rock.",
    ],
    isHelper: false,
  },
  p3_moon_link: {
    tabName: "novel",
    godName: "Senkuu Ishigami",
    godNickname: "Sorcerer Sage",
    tabImageUrl: "../assets/resources/nyx.webp",
    dialogCount: 0,
    tabInfo: [""],
    isHelper: false,
  },
  p4_link: {
    tabName: "music",
    godName: "Kousei Arima and Kaori Miyazono",
    godNickname: "Human Metronome and Heart Weaver",
    tabImageUrl: "../assets/resources/nyx.webp",
    dialogCount: 0,
    tabInfo: ["Welcome to synth my friend. Im Kousei Arima and she is Kaori Miyazono. Its nice to meet you."],
    isHelper: false,
  },
  p5_link: {
    tabName: "extras",
    godName: "",
    godNickname: "",
    tabImageUrl: "../assets/resources/nyx.webp",
    dialogCount: 0,
    tabInfo: [
        "Nhhghhhg gh gh...",
        "Gguhhhhhh...",
        "Urrrnngghhhh…",
        "Haahhhhh…",
        "Hhhaaaaaaahhh…",
        "Hheeehhhhhh…..",
        "Nrrnnhhh, hhnnn, hrnnn, hrnnnn…............",
        "Rhhuuaaaauugghhhh….",
        "Hrrrrnnghhhhhhhhh….",
        "nnnnrrhhhh…."
    ],
    isHelper: false,
  },
}

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

function printDialog(dialogCount, length) {
  if(dialogCount < (length - 1)){
    return true
  }
  return false
}
function updateCurrentTab(data) {
  currentTabValues.tabName = data.tabName;
  currentTabValues.godName = data.godName;
  currentTabValues.godNickname = data.godNickname;
  currentTabValues.tabImageUrl = data.tabImageUrl;
  currentTabValues.tabInfo = data.tabInfo[data.dialogCount];
}
function changeCurrentTab(e) {
  currentTabHovered.value = e.target.id
  let currentGod = godData[currentTabHovered.value + ""]
  let godDialogLength = currentGod["tabInfo"].length
  let isHelperPresent = currentGod["isHelper"]

  if (!(isHelperPresent === true)) {
    updateCurrentTab(currentGod)
    if(printDialog(currentGod["dialogCount"], godDialogLength)){
      currentGod["dialogCount"] += 1
    }
  } else {
    let chances = Math.floor(Math.random() * 100);
    if (chances <= 90) {
      updateCurrentTab(currentGod)
      if(printDialog(currentGod["dialogCount"], godDialogLength)){
        currentGod["dialogCount"] += 1
      }
    } else {
      currentGod = currentGod["helper"]
      godDialogLength = currentGod["tabInfo"].length
      updateCurrentTab(currentGod)
      if(printDialog(currentGod["dialogCount"], godDialogLength)){
        currentGod["dialogCount"] += 1
      }
    }
  }
}
function resetCurrentTab() {
  currentTabHovered.value = "none"
}

// Normal js here
const getPngUrl = (name) => {
  return new URL(`${name}`, import.meta.url).href
}
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
  let hoverableEntities = Array.from(document.getElementsByClassName("clickable"))
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
  let hoverableItems = Array.from(document.getElementsByClassName("clickable-nostop"))
  hoverableItems.forEach((entities) => {
    entities.addEventListener("mouseover", () => {
      innerCursor.classList.add("grow-" + theme.value)
    })
    entities.addEventListener("mouseleave", () => {
      innerCursor.classList.remove("grow-" + theme.value)
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
        <img v-show="theme==='dark'" id="logo-img" src="@/assets/logo/nyxane_svg_dark.svg" alt="Nyxane">
        <img v-show="theme==='light'" id="logo-img" src="@/assets/logo/nyxane_svg_light.svg" alt="Nyxane">
      </div>
      <div id="nav-menu" @click="toggleMenu">
        <div id="menuButton" class="hamburger clickable-nostop" :class="{isactive: menuActive }">
          <span class="menuline"></span>
          <span class="menuline"></span>
          <span class="menuline"></span>
        </div>
      </div>
      <div v-show="menuActive === true" id="menuTab">
        <div id="tabInfo" class="menuTabElements">
          <div v-if="currentTabHovered !== 'none'" id="god_pane">
            <div id="entity_god_wrapper">
            <img id="entity_god" :src="getPngUrl(currentTabValues.tabImageUrl)" alt="">
            </div>
            <!--<div id="dialog_box">
              <div id="entity_dialogue">{{ currentTabValues.tabInfo}}</div>
            </div>-->
            <!--<img src="@/assets/resources/dialogue_box.png" alt="">-->
            <dialog-box :godName="currentTabValues.godName" :tabInfo="currentTabValues.tabInfo"></dialog-box>
          </div>
        </div>
        <div id="tabLinks" class="menuTabElements">
          <ul>
            <li id="p1_link" class="tabPageLinks clickable-nostop" @mouseenter="changeCurrentTab"
                @mouseleave="resetCurrentTab">Disboard
            </li>
            <li id="p2_link" class="tabPageLinks clickable-nostop" @mouseenter="changeCurrentTab"
                @mouseleave="resetCurrentTab">Void
            </li>
            <li id="p3_link" class="tabPageLinks clickable-nostop" @mouseenter="changeCurrentTab"
                @mouseleave="resetCurrentTab">Animon <span id="mythicPageLink">Mythic</span></li>
            <li id="p4_link" class="tabPageLinks clickable-nostop" @mouseenter="changeCurrentTab"
                @mouseleave="resetCurrentTab">Synth
            </li>
            <li id="p5_link" class="tabPageLinks clickable-nostop" @mouseenter="changeCurrentTab"
                @mouseleave="resetCurrentTab">Haven
            </li>
          </ul>
          <div id="menuOptions">
            <div class="menuOption">About Nyxane</div>
            <div class="menuOption">Settings</div>
          </div>
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
          <router-link class="nav-link entity clickable" :to="{name : 'games-page'}">
            <div id="planet0" class="entity"></div>
          </router-link>

          <div id="ring1" class="orbit">
            <router-link class="nav-link entity clickable" :to="{name : 'void-page'}">
              <div id="planet1" class="entity"></div>
            </router-link>

            <div id="ring2" class="orbit">
              <router-link class="nav-link entity clickable" :to="{name : 'anime-page'}">
                <div id="planet2" class="entity">
                  <div id="p2_moon" class="entity"></div>
                </div>
              </router-link>

              <div id="ring3" class="orbit">
                <router-link class="nav-link entity clickable" :to="{name : 'music-page'}">
                  <div id="planet3" class="entity"></div>
                </router-link>

                <div id="ring4" class="orbit">
                  <router-link class="nav-link entity clickable" :to="{name : 'extras-page'}">
                    <div id="planet4" class="entity"></div>
                  </router-link>

                  <!--Center Star ( Black )-->
                  <router-link class="nav-link-star" :to="{name : 'github-page'}">
                    <div id="star" class="entity clickable">
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
@import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');

* {
  cursor: none;
  font-family: 'Marcellus SC', serif;
}



/* Navbar styles */
@keyframes menuOpenAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#nav-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#nav-menu {
  display: grid;
  justify-self: right;
  align-self: center;
  z-index: 9999;

  position: relative;
  top: 15px;
  right: 25px;
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
  width: 60px;
  height: 60px;
  border: 5px solid transparent;
  top: calc(50% - 30px);
  left: calc(50% - 31px);
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
  border-radius: 25px;
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

#menuTab {
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 999;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 2fr 0.65fr;

  animation-name: menuOpenAnimation;
  animation-duration: 0.3s;
  animation-timing-function: ease-in;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  border-left: 3px solid white;
}

.menuTabElements {
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: grid;
  align-content: center;
  overflow: hidden;
}

.menuTabElements ul {
  margin: 0;
  padding: 0px;
  font-size: 4em;
  display: grid;
  align-items: center;
  grid-template-rows: repeat(5, 1fr);
  padding-left: 10px;
}

.tabPageLinks {
  color: white;
  list-style: none;
  padding: 20px;
  display: grid;
  position: relative;
  text-align: center;
}

.tabPageLinks:hover {
  transition: 0.1s;
  scale: 1.1;
  border-right: 19.5px solid white;
}

#mythicPageLink {
  position: absolute;
  bottom: 0;
  justify-self: center;
  font-size: 0.5em;
  color: var(--planet2-moon-color);
}

#p1_link {
  color: var(--planet-color);
}

#p2_link {
  color: var(--planet-color1);
}

#p3_link {
  color: var(--planet-color2);
}

#p4_link {
  color: var(--planet-color3);
}

#p5_link {
  color: var(--planet-color4);
}

#menuOptions {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  justify-items: center;
  position: absolute;
  top: 25px;
  right: 5em;
  color: white;
}

.menuOption {
  padding: 10px;
}



#god_pane {
  height: 100vh;
  display: grid;
}
#entity_god_wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
}
#entity_god {
  width: 650px;
}
/*#dialog_box {
  background: url("../assets/resources/dialogue_box.png");
  width: 1020px;
  aspect-ratio: 16/9;
  position: absolute;
  bottom: 0px;
  left: 300px;
}
#entity_dialogue {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 2em;
  padding: 10px 10px 10px 15px;
  border: 3px solid white;
  border-radius: 20px;
  position: absolute;
  bottom: 40px;
  width: 25em;
  height: 6em;
  justify-self: end;
}*/



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
  background-color: var(--planet2-moon-color);
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