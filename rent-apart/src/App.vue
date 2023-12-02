<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <button>bbbbbb</button>
    <button>Btn</button>
    <!-- <Button>,mn,mbmb</Button> -->
    <Btn>Click me</Btn>
    <Title></Title>
  </div>
</template>

<script>
import Title from './components/Title.vue'

// import Btn from "./components/Button.js"

export default {
  name: "App",
  components: {
    Title,
    // Btn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
