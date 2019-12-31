<template>
  <section v-if="posts.length > 0" class="blog top--60">
    <article
      :class="new Date().getHours() >= 19 || new Date().getHours() <= 4 ? 'night' : ''"
      @click="goto(post.slug)"
      class="card"
      v-for="(post, index) in posts"
      :key="index"
    >
      <img :src="post.image" />
      <div
        :class="new Date().getHours() >= 19 || new Date().getHours() <= 4 ? 'night' : ''"
        class="card-content"
      >
        <h1>{{post.title}}</h1>
        <footer>
          <aside>{{post.author}}</aside>
          <aside>{{Math.ceil(post.content.split(' ').length/200)}} min read - {{$timeAgo(new Date(post.postTime))}}</aside>
        </footer>
      </div>
    </article>
  </section>
  <section class="blog top-0" v-else>
    <p>Hello, currently there seems to be no blog posts, please come back later!</p>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: [],
      lastRequest: new Date(),
      page: 0,
    };
  },
  beforeMount() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.lastRequest = new Date();
      const posts = await (await this.$http.get(
        `${this.$apiUrl}/blog/paginate/${this.page}`
      )).data;
      if (posts.length > 0) {
        this.page += 1;
        this.posts = [...this.posts, ...posts];
      }
      return true;
    },
    goto(slug) {
      this.$router.push(`/blog/view/${slug}`);
    },
  },
};
</script>

<style scoped>
.top-0 {
  top: 0;
}
.top--60 {
  top: -60px;
}
.blog {
  display: flex;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  position: relative;
}

.card.night {
  background: #000000;
  color: #ffffff;
}

.card .card-content.night {
  background: #000000;
  color: #ffffff;
}
.card {
  min-height: 300px;
  display: flex;
  margin: 1em;
  border-radius: 5px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.3);
  background-size: cover;
  width: 30%;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s;
  justify-content: space-between;
}

.card:hover {
  transition: 0.2s;
  transform: scale(1.1);
}

.card h1 {
  font-size: 1.7em;
  padding: 0;
  margin: 0;
}

.card main {
  font-size: 1.3em;
  overflow: hidden;
}

.card img {
  object-fit: cover;
  max-height: 300px;
}

.card .card-content {
  padding: 1em;
  display: flex;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
}

.card footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1400px) {
  .card {
    flex: 1 1 45%;
  }
  .blog {
    display: flex;
    margin: auto;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
  }
}
</style>
