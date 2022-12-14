<template>
  <div id="card">
    <div id="card-info">
      <div id="card-info-user">
        <img id="user-image" :src="data.urlImgProfil" alt="PP" />
        <h3 id="h3-title">{{ data.pseudo }}</h3>
      </div>
      <div id="card-info-date">
        <h4 id="h4-info">{{ new Date(data.date) }}</h4>
      </div>
    </div>
    <div id="card-image">
      <img id="post-image" :src="data.urlImgArticle" alt="Post" />
    </div>
    <div id="card-description">
      <p id="description">{{ data.content }}</p>
    </div>
    <div id="card-like"></div>
    <div id="card-comments">
      <div id="card-comments-title">
        <h3 id="h3-title">Comments :</h3>
      </div>
      <Comment
        v-for="comment in data.comments"
        :key="comment.id"
        :data="comment"
      ></Comment>
    </div>
  </div>
</template>

<script setup>
import Comment from "./Comment.vue";

const props = defineProps({
  data: Object,
});
</script>

<style scoped>
#card {
  width: 80%;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

#card-info {
  height: 80px;
  display: flex;
  flex-direction: row;
}

#card-info-user {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#user-image {
  width: 45px;
  height: 45px;
  margin-left: 10px;
}

#card-info-date {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
#card-info-date h4 {
  font-size: 1.2rem !important;
}

#card-image {
  width: 50%;
  height: 350px;
  align-items: center;
  position: relative;
  margin: auto;
}

#post-image {
  width: 100%;
  height: 100%;
}

#card-description {
  width: 100%;
  height: auto;
}

#description {
  font-size: 20px;
  padding-left: 35px;
}

#card-comments {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

#card-comments-title {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}
</style>
