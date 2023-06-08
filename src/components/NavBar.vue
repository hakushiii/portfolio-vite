<template>
    <nav>
        <p><router-link :to="{name: 'home'}">Home</router-link></p>
        <p><router-link :to="{name: 'works'}">Works</router-link></p>
        <p><router-link :to="{name: 'tools'}">Tools</router-link></p>
    </nav>
</template>

<style>
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>