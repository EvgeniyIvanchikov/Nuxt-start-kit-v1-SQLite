<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Description of the blog page' },
    { property: 'og:title', content: 'Blog' },
    { property: 'og:description', content: 'Description of the blog page' },
  ],
});
</script>
<template>
  <h1>Blog</h1>
</template>
