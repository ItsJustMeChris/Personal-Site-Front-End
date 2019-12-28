<template>
  <div class="wrapper">
    <div class="card">
      <div class="flip-card-inner">
        <div @click.self="flip($event)" class="flip-card-front">
          <header>Chris</header>
          <hr />
        </div>
        <div @click.self="flip($event)" class="flip-card-back">
          <h1>Chris McGravey</h1>
          <p>Software Engineer</p>
          <ul>
            <li>
              <a href="https://github.com/itsjustmechris">
                <i class="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/christian-mcgravey/">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:this@ischris.dev">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      back: false,
    };
  },
  components: {},
  methods: {
    flip(e) {
      console.log(e.target);
      if (!this.back) {
        e.target.parentElement.style.transform = 'rotateY(180deg)';
      } else {
        e.target.parentElement.style.transform = 'rotateY(0deg)';
      }
      this.back = !this.back;
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #555555;
}

.card {
  background-color: transparent;
  width: 600px;
  height: 400px;
  perspective: 1000px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: #292929 8px 8px 10px 0px;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  font-size: 8em;
  border-radius: 30px;
  background-color: #333333;
  color: #bbbbbb;
}

.flip-card-front hr {
  background: #bbbbbb;
  width: 1.6em;
  height: 8px;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 1.2em;
}

/* Style the back side */
.flip-card-back {
  border-radius: 30px;
  background-color: #333333;
  color: #bbbbbb;
  transform: rotateY(180deg);
}

.flip-card-back ul {
  list-style: none;
  padding: 0;
}

.flip-card-back ul li {
  display: inline;
  margin: 0.2em;
}

.flip-card-back ul li a {
  font-size: 2.5em;
  text-decoration: none;
  color: #bbbbbb;
  transition: 0.2s;
}

.flip-card-back ul li a:hover {
  color: #ffffff;
  transition: 0.2s;
}
</style>
