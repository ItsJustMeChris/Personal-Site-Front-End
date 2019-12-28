<template>
  <div id="auth">
    <div class="wrapper">
      <header>
        <button
          @click="selection='login'"
          v-bind:class="selection === 'login' ? 'selected' : 'selector'"
        >Login</button>
        <button
          @click="selection='signup'"
          v-bind:class="selection === 'signup' ? 'selected' : 'selector'"
        >Signup</button>
      </header>
      <main v-if="selection==='login'">
        <input v-model="username" placeholder="Username" type="text" />
        <input v-model="password" placeholder="Password" type="password" />
      </main>
      <main v-if="selection==='signup'">
        <input v-model="username" placeholder="Username" type="text" />
        <input v-model="password" placeholder="Password" type="password" />
        <input v-model="password2" placeholder="Verify Password" type="password" />
      </main>
      <footer>
        <button class="action" @click="login" v-if="selection==='login'">Login</button>
        <button class="action" @click="register" v-if="selection==='signup'">Signup</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      selection: 'login',
      username: null,
      password: null,
      password2: null,
      email: null,
    };
  },
  beforeMount() {
    if (this.$store.getters.sessionToken) {
      this.$router.push('/');
    }
  },
  components: {},
  methods: {
    async login() {
      try {
        const { username, password } = this;
        const {
          data: { token },
        } = await this.$http.post(`${this.$apiUrl}/auth/login`, {
          username,
          password,
        });
        if (token) {
          this.$store.commit('setSessionToken', token);
        }
        this.$router.push('/blog');
      } catch (err) {
        console.log(err);
      }
    },
    async register() {
      try {
        const { username, password, email } = this;
        const {
          data: { token },
        } = await this.$http.post(`${this.$apiUrl}/auth/register`, {
          username,
          password,
          email,
        });
        if (token) {
          this.$store.commit('setSessionToken', token);
        }
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
#auth {
  height: 100%;
  width: 100%;
  display: grid;
}

main {
  display: flex;
  flex-direction: column;
}

.wrapper {
  background: #fff;
  margin: auto;
}

button.selector {
  border: none;
  width: 50%;
  text-align: center;
  padding: 1em;
  background: #f2f2f2;
  border-bottom: 3px solid #00d8ff;
}

button.selected {
  border: none;
  width: 50%;
  text-align: center;
  padding: 1em;
  background: #dbdbdb;
  border-bottom: 3px solid #00d8ff;
}

input {
  border: none;
  background: #f2f2f2;
  height: 2em;
  width: 25em;
  margin: 1em;
  padding: 1em;
}

button.action {
  width: 100%;
  border: none;
  background: #00ffa8;
  text-align: center;
  padding: 2em;
}
</style>
