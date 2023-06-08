<template>
  <NavBar />
  <router-view />
</template>

<style scoped>
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>