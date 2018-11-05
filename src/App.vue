<template>
  <div id="app">
    <Navbar/>
     <router-view/>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Poppins', sans-serif;
}
</style>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>