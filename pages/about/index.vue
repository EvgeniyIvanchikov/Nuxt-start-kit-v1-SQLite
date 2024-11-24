<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'Description of the about page' },
    { property: 'og:title', content: 'About' },
    { property: 'og:description', content: 'Description of the about page' },
  ],
});
</script>
<template>
  <h1>About</h1>
</template>
