<script setup>
function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.position = "absolute";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.backgroundColor = "white";
  document.getElementById("stars_pane").appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000);
}

function animateStars() {
  setInterval(() => {
    createStar();
  }, 200);
}

animateStars();
</script>


<template>
  <section id="planetary_system">
    <div id="stars_pane"></div>
    <div id="container">
      <div id="ring0" class="orbit">
        <div id="planet0" class="entity"></div>
        <div id="ring1" class="orbit">
          <div id="planet1" class="entity"></div>
          <div id="ring2" class="orbit">
            <div id="planet2" class="entity"></div>
            <div id="ring3" class="orbit">
              <div id="planet3" class="entity"></div>
              <div id="ring4" class="orbit">
                <div id="planet4" class="entity"></div>

                <div id="star"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
#planetary_system {
  display: grid;
  justify-content: center;
  overflow: hidden;
  position: relative;
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

  border-radius: 50%;
  height: calc(var(--sun-radius) * var(--planet-size-multiplier));;
  width: calc(var(--sun-radius) * var(--planet-size-multiplier));;

  position: absolute;
  justify-self: center;
  align-self: center;

  box-shadow: 0px 0px 60px -5px #F2F2F2FF;
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
  background-color: #990000FF;
  width: calc(var(--planet-radius) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet1 {
  background-color: aliceblue;
  width: calc(var(--planet-radius1) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius1) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift1) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet2 {
  background-color: #00d8ff;
  width: calc(var(--planet-radius2) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius2) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift2) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet3 {
  background-color: #440091;
  width: calc(var(--planet-radius3) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius3) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift3) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

#planet4 {
  background-color: #434343;
  width: calc(var(--planet-radius4) * var(--planet-size-multiplier));
  height: calc(var(--planet-radius4) * var(--planet-size-multiplier));
  top: calc(var(--planet-shift4) * var(--planet-size-multiplier) * var(--planet-shift-direction));
}

/* animation: spinf 3s infinite;  Can be added to planets for subclass or moons */

#stars_pane {
  height: 100%;
}
</style>