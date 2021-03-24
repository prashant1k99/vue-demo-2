<template>
  <div>
    <v-toolbar-title
      align="center"
      color="primary"
      flat
      class="text-uppercase font-weight-regular"
    >Login</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-text class="d-flex justify-center align-center red--text text-darken-3" v-if="wrongValue">Invalid Email and/or password</v-text>
    <v-card
      elevation="2"
      class="mx-auto my-12"
      max-width="500"
    >
    <v-card-text>
      <v-form>
        <v-text-field
          label="Email"
          name="email"
          type="email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          label="Password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          v-model="password"
          @keypress.enter="sendDataForLogin"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="login_card_action">
      <v-btn
        class="px-8"
        color="primary"
        :loading="loading"
        :disabled="!validate || loading"
        @keydown.prevent="listenForEnter"
        @click.prevent="sendDataForLogin"
      >Login</v-btn>
    </v-card-actions>
</v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['emailLogIn'],
  data: () => ({
    email: '1',
    password: '',
    wrongValue: false,
    loading: false,
    showPassword: false
  }),
  mounted () {
    this.email = this.emailLogIn
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signInUser'
    }),
    listenForEnter (e) {
      if (e.key === 'Enter') {
        this.sendDataForLogin()
      }
    }, 
    sendDataForLogin () {
      const email = this.email
      this.loading = true
      this.signIn({
        email
      }).then((status) => {
        if (status === 'Success') {
          this.$router.push('/')
        } else {
          this.wrongValue = true
        }
        this.loading = false
      })
    }    
  },
  computed: {
    validate () {
      if (!this.email && !this.password) return false
      return true
    }
  }
}
</script>

<style lang="scss">
.login_card_action {
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
