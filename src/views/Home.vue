<template>
  <section
    :class="new Date().getHours() >= 19 || new Date().getHours() <= 4 ? 'night' : ''"
    class="home"
  >
    <Profile />
    <Blog />
  </section>
</template>

<script>
import Blog from '@/components/Blog.vue';
import Profile from '@/components/Profile.vue';

export default {
  name: 'home',
  components: {
    Blog,
    Profile,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
}

.home.night {
  background: #333333;
}

.home > * {
  flex: 1 100%;
}
</style>
