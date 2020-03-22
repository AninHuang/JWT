<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      <router-link to="/login">Login</router-link>
      <br />
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers'

export default {
  computed: {
    ...authComputed
  }
}
</script>
