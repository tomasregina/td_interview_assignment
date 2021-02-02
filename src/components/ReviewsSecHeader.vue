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
      pageData: landingPageData.reviews_sec.reviews_sec_header
    }
  }
}
</script>
<style lang="postcss">

</style>
