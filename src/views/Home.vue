<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!this.$store.state.user">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>
