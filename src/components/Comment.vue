<template>
  <div id="comment">
    <div id="comment-info">
      <div id="comment-info-user">
        <h3>{{ data.pseudo }}</h3>
      </div>
      <div id="comment-info-date">
        <h4>{{ new Date(data.dt) }}</h4>
      </div>
    </div>
    <div id="comment-section">
      <p id="comment-text">{{ data.content }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>

<style scoped>
#comment {
  height: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
}

#comment-info {
  height: 40px;
  display: flex;
  flex-direction: row;
}

#comment-info-user {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

h4 {
  font-weight: 500;
  margin-right: 20px;
}

#comment-info-date {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
</style>
