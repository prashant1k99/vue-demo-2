<template>
  <v-app>
  <div class="header">
      <div class="logo">
        <router-link to="/">
          <v-img
            max-height="50px"
            width="40px"
            max-width="100px"
            :src="require(`./assets/logo.png`)"
            contain
          ></v-img>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="menu d-flex flex-row align-center">
        <div v-if="!auth">
          <router-link to="/login">
            <v-btn class="mx-1" text>Login</v-btn>
          </router-link>
        </div>
        <div v-else class="d-flex flex-row align-center">
          <Avatar class="mx-1" />
        </div>
      </div>
    </div>
    <v-main class="body-content">
      <transition name="fade-in-up" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-footer color="rgba(255, 0, 0, 0)" class="caption" flat tile padless>
      <v-col class="text-center" cols="12">{{ new Date().getFullYear() }} — Made by <a href="https://github.com/prashant1k99" target="_blank">Prashant Singh </a></v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Avatar from './components/UserIcon.vue'
export default {
  name: 'App',
  components: {
    Avatar
  },
  computed: {
    auth () {
      return this.$store.state.auth.status
    }
  }
}
</script>

<style lang="scss" >
@import "./utils/styles.scss";
.app_container {
  transition: color 0.3s, background-color 0.3s ease-in;
}
.header {
  padding: 20px 0;
  height: 20vh;
  display: flex;
  width: 80%;
  margin: auto;
  align-items: center;
  @media (max-width: 1000px) {
    width: 90%;
    padding: 10px 0;
  }
  @media (max-width: 700px) {
    width: 90%;
    height: 15vh;
  }
}
.body-content {
  width: 80%;
  margin: 0 auto;
}
</style>