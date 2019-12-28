<template>
  <div id="new-post">
    <input v-model="title" type="text" />
    <input type="file" id="file" ref="file" name="file" @change="uploadFile" />
    <input v-model="description" type="text" />
    <img v-if="imgUrl !== null" :src="imgUrl" alt />
    <Editor
      v-model="content"
      api-key="uxrs1mrp4cu1a9fefsfplo25y7eso36651p1kvhn327rq759"
      :init="{plugins: ['wordcount', 'image']}"
    ></Editor>
    <button @click="createPost">Create Post</button>
    <div>{{content}}</div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'Auth',
  data() {
    return {
      title: null,
      content: null,
      imgUrl: null,
      description: null,
    };
  },
  beforeMount() {},
  components: {
    Editor,
  },
  methods: {
    async createPost() {
      try {
        const { title, content, description } = this;
        const token = this.$store.getters.sessionToken;
        const {
          data: { status, message },
        } = await this.$http.post(`${this.$apiUrl}/blog/new`, {
          title,
          content,
          token,
          description,
          image: this.imgUrl,
        });
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    async uploadFile() {
      const formData = new FormData();
      formData.append('file', this.$refs.file.files[0]);
      formData.append('token', this.$store.getters.sessionToken);
      this.$http
        .post(`${this.$apiUrl}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(
          function(response) {
            const {
              data: { url },
            } = response;
            this.imgUrl = url;
          }.bind(this)
        )
        .catch(function() {});
    },
  },
};
</script>

<style scoped>
</style>
