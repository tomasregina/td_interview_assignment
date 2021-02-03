<template>
  <div class="container">
    <div class="photo">
      <img :src="photo_url" alt="">
    </div>
    <div class="text-container">
      <div class="review-text">
        <span>{{ review_text }}</span>
      </div>
      <div class="author-info">
        <span class="name">{{ author }}</span>
        <span class="bio">{{ author_bio }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photo_url: String,
    review_text: String,
    author: String,
    author_bio: String
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
  height: 300px;
}
img {
  border-radius: 50%;
  width: 70%;
}
.photo {
  float: left;
  width: 50%;
  height: 30%;
}
.text-container {
  width: 50%;
  float: right;
}
</style>
