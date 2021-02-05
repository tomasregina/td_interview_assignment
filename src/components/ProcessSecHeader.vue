<template>
  <div class="container">
    <div class="title-container">
      <span>{{ pageData.title }}</span>
    </div>
    <div class="descr-container">
      <span>{{ pageData.descr }}</span>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.process_sec.process_sec_header
    }
  }
}
</script>
<style lang="postcss" scoped>
.title-container span {
  font-size: 36px;
}
.descr-container span {
  font-size: 16px;
}
</style>
