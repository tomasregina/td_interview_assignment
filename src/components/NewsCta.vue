<template>
  <div class="container">
    <div class="title-container">
      <span class="title">{{ pageData.title }}</span>
    </div>
    <div class="cta-container">
      <button class="cta-btn">{{ pageData.btn_title }}</button>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData'
export default {
  data() {
    return {
      pageData: landingPageData.news_sec.news_cta
    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
}
.title {
  width: 650px;
  text-align: center;
  margin: 0 auto;
  font-size: 36px;
}
.cta-btn {
  color:black;
  background: rgba(255,211,3,1);
  border-radius: 100px;
  border: none;
  width: 224px;
  height: 52px;
  font-size: 21px;
}
.cta-div {
  width: 200px;
  margin: 0 auto;
}
</style>
