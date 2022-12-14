<template>
  <div id="netline">
    <Article
      v-for="article in articles"
      :key="article.id"
      :data="article"
    ></Article>
  </div>
</template>

<script setup>
import Article from "./Article.vue";

const articles = await fetch(`http://localhost:3400/article`).then((r) =>
  r.json()
);
</script>

<style scoped>
#netline {
  height: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
