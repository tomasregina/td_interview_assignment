<template>
  <div class="container" :style="{backgroundImage: 'url(' + pageData.img_url + ')'}">

  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.faq_sec.faq_sec_header_img
    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
  display: block;
  width: 100%;
  height: 295px;
  position: relative;
  background-position: center top;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
}
</style>
