<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <!-- <div> -->
  <!--   <a href="https://vitejs.dev" target="_blank"> -->
  <!--     <img src="/vite.svg" class="logo" alt="Vite logo" /> -->
  <!--   </a> -->
  <!--   <a href="https://vuejs.org/" target="_blank"> -->
  <!--     <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
  <!--   </a> -->
  <!-- </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <Navbar></Navbar>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>

</style>
