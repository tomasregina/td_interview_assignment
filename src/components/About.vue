<template>
  <div class="container" :style="{backgroundImage: 'url(' + pageData.backgroung_img + ')'}">
    <div class="title">
      <span>{{ pageData.title }}</span>
    </div>
    <div class="descr">
      <span>{{ pageData.descr }}</span>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData'

export default {
  data() {
    return {
      pageData: landingPageData.about_sec.about
    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
  background-size: cover;
  width: 100%;
  height: 675px;
}
.title, .descr {
  width: 685px;
  margin: 0 auto;
  text-align: center;
}
.title span {
  font-size: 36px;
}
.descr span {
  font-size: 16px;
}
</style>
