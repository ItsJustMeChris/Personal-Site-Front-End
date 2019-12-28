<template>
  <section class="user">
    <header>
      <img
        src="https://steemitimages.com/DQmV5hC3uxfmBhYnzRMGdGvxnPsJMhMjWkCzMmAdiGXP8AH/image.png"
        alt
      />
      <h2>Welcome, User</h2>
    </header>
    <section id="main">
      <aside>
        <ul>
          <li>View</li>
          <li>Update</li>
          <li>Logout</li>
        </ul>
      </aside>

      <aside>
        <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel quisquam, delectus atque repudiandae, nihil expedita quidem sed nam sequi, natus voluptates. Repellendus assumenda molestiae ut minima debitis iure eaque perferendis ad! Magnam eligendi molestiae quaerat rem doloremque! Blanditiis facere possimus iste dolor non unde ducimus ut ad sequi, harum temporibus perspiciatis expedita reiciendis, esse voluptatem incidunt fugit accusamus quia consectetur, omnis tempore. Quasi error ipsa eos necessitatibus vitae iste aspernatur quas tempora minus vero. Sed hic, facilis eveniet repellendus nobis debitis impedit consequatur! Odit quas debitis architecto. Illo, quod eligendi! In nemo consectetur magnam ab minima! Ab ratione molestias unde commodi voluptatum voluptate ducimus dolorem, quos velit alias odit dicta numquam vitae doloribus et deleniti corporis exercitationem aliquam. Esse quaerat quia corporis totam eveniet, nisi odio, facilis pariatur illum sit optio accusamus sed incidunt quam, explicabo distinctio fuga ab. Voluptate animi sint saepe deleniti? Soluta, hic aut blanditiis ducimus tenetur, labore harum officiis minus odit repudiandae perferendis aspernatur sequi, incidunt cupiditate quaerat veniam! Itaque in, quidem saepe adipisci, veniam cupiditate molestias sed architecto consequuntur cum animi placeat ex sapiente magni autem sit voluptatum. Voluptatibus repellat, fugit asperiores, dicta magni dolorum quas pariatur doloribus repudiandae, quia alias officiis doloremque nobis nam sint nihil deleniti aperiam! Provident quae dolorem libero, corrupti commodi ipsam dignissimos maiores quibusdam, aliquam explicabo, recusandae velit architecto? Quod, aspernatur! Dolorum eveniet aliquid tempore. Blanditiis amet non ratione pariatur quam repudiandae placeat? Natus corporis quibusdam pariatur molestias totam architecto non autem iste sequi fuga repellendus, voluptate, earum temporibus doloribus accusantium ipsum quasi ad. Illo non itaque distinctio, ex nisi sed aliquam natus incidunt minus cumque tenetur voluptatibus vel blanditiis in doloribus consectetur tempore nulla possimus pariatur cupiditate ratione unde dicta quam id! Perferendis error exercitationem at beatae iste aliquid, dolor consectetur laudantium quos saepe quas atque, aspernatur odit dolorem rem facilis accusamus? Unde a voluptate mollitia fuga deserunt vero eveniet cumque quae ex fugiat architecto, maxime deleniti vel? Aliquam, placeat. Labore optio explicabo quis autem odio nesciunt sint assumenda ad veniam fuga minus dicta, mollitia ipsam! Animi corporis qui perspiciatis doloremque ad sit. Assumenda ipsam iusto dignissimos ea quia ullam vero aliquam sint ipsum hic, facere nisi repellendus officia ab voluptatum aperiam facilis nihil dolorum vel. Eaque tempore magnam deserunt temporibus, deleniti enim quasi excepturi officia placeat tenetur voluptatum odit recusandae eligendi consequuntur dolorem dolorum eveniet! Earum necessitatibus quia animi cum atque aliquid deserunt sed repellat quam impedit.</main>
      </aside>
    </section>
  </section>
</template>

<script>
export default {
  name: 'user',
  components: {},
  data() {
    return {
      sessions: [],
    };
  },
  beforeMount() {
    if (!this.$store.getters.sessionToken) {
      this.$router.push('/');
    }
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const token = this.$store.getters.sessionToken;
      const { data } = await this.$http.post(`${this.$apiUrl}/auth/sessions`, {
        token,
      });
      this.sessions = [...data];
    },
  },
};
</script>

<style scoped>
section.user {
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  align-items: center;
}

header img {
  height: 10em;
}

header {
  display: flex;
}

section#user section {
  display: flex;
  flex-direction: column;
}
</style>
