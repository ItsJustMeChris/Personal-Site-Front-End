<template>
  <div
    :class="new Date().getHours() >= 19 || new Date().getHours() <= 4 ? 'night' : ''"
    id="blog-post"
  >
    <header>
      <nav>
        <ul>
          <router-link to="/">
            <li>Home</li>
          </router-link>
        </ul>
      </nav>
    </header>
    <article>
      <h1>{{title}}</h1>
      <h3>Posted by {{author}} - {{$timeAgo(new Date(postTime))}}</h3>
      <img :src="imgUrl" alt="Article Image" />
      <main
        :class="new Date().getHours() >= 19 || new Date().getHours() <= 4 ? 'night' : ''"
        v-html="content"
      ></main>
    </article>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      title: null,
      content: null,
      imgUrl: null,
      author: null,
      postTime: null,
      fromRoute: null,
    };
  },
  beforeMount() {
    this.fetchPost(this.$route.params.slug);
  },
  components: {},
  methods: {
    async fetchPost(slug) {
      this.lastRequest = new Date();
      const {
        data: { title, image, content, createdAt, username },
      } = await this.$http.get(`${this.$apiUrl}/blog/post/${slug}`);
      if (title) {
        this.title = title;
        this.imgUrl = image;
        this.content = content;
        this.postTime = createdAt;
        this.author = username;
      }
    },
  },
};
</script>

<style scoped>
#blog-post.night {
  background: #333333;
  color: #ffffff;
}

div#blog-post {
  flex-direction: column;
  display: flex;
  text-align: center;
}

article {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  background-size: cover;
}

article h1 {
  font-size: 4em;
}

main >>> img {
  max-width: 100%;
  height: auto;
}

article img {
  object-fit: cover;
  border-radius: 10px;
  height: 800px;
}

article main {
  top: -5em;
  position: relative;
  width: 80%;
  margin: 0 auto;
  background: #fff;
  padding: 2em;
  font-size: 1.5em;
  text-align: left;
  box-shadow: 0px 2px 10px 0px #bfbfbfad;
}

article main.night {
  background: #333333;
  box-shadow: 0px 2px 10px 0px #000000;
}

header {
  height: 4em;
  background: #00adff;
  display: flex;
}

header nav li {
  display: inline-block;
  margin-right: 1em;
  padding: 1em;
  border: #ffffff 2px solid;
  border-radius: 5px;
  color: #ffffff;
}

header nav li a {
  color: #ffffff;
}

header nav {
  display: flex;
  align-items: center;
}

a.router-link-active {
  text-decoration: none;
}

@media only screen and (max-width: 900px) {
  article img {
    height: 600px;
  }
  article h1 {
    font-size: 2.5em;
  }
}

@media only screen and (max-width: 700px) {
  article img {
    height: 400px;
  }
  article main {
    width: 100%;
    padding: 0;
    box-shadow: none;
  }
  article h1 {
    font-size: 2em;
  }
}
</style>
