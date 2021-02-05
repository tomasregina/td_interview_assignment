<template>
  <div class="container" :style="{backgroundImage: 'url(' + pageData.background_img + ')'}">
    <div class="title-container">
      <span>{{ pageData.title }}</span>
    </div>
    <div class="cta-container">
      <button class="cta-btn">{{ pageData.btn_title }}</button>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.entry_sec.entry_cta
    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
  display: block;
  width: 100%;
  height: 325px;
  position: relative;
  background-position: center top;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
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
.title-container span {
  font-size: 36px;
  color: white;
}
</style>
