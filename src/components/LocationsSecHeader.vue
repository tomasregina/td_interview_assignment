<template>
  <div class="container">
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
      pageData: landingPageData.locations_sec.locations_sec_header
    }
  }
}
</script>
<style lang="postcss" scoped>
.title span {
  font-size: 36px;
}

.descr span {
  font-size: 16px;
}
</style>
