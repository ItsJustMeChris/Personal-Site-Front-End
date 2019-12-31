<template>
  <section class="profile">
    <img class="avatar" src="static/images/avatar.png" />
    <p class="about-text">I create things.</p>
    <section class="social-icons">
      <a href="https://github.com/itsjustmechris">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/christian-mcgravey/">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:hello@itschris.dev">
        <i class="fas fa-envelope"></i>
      </a>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style scoped>
.profile {
  background: #00adff;
  display: flex;
  flex-direction: column;
  padding: 5em;
  color: #fff;
}

img.avatar {
  height: 10em;
  width: 10em;
  margin: auto;
}

.about-text {
  font-size: 3rem;
  text-align: center;
}

.social-icons {
  text-align: center;
  font-size: 3rem;
}

.social-icons a i {
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
}

.social-icons a i:hover {
  color: #dddddd;
  transition: 0.3s;
}

.social-icons a {
  padding: 0.2em;
}
</style>
