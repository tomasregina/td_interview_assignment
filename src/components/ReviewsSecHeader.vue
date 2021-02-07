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
import landingPageData from '../assets/landingPageData'
export default {
  data() {
    return {
      pageData: landingPageData.reviews_sec.reviews_sec_header
    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title-container {
  font-size: 36px;
  text-align: center;
}
.descr-container {
  font-size: 16px;
}
@media only screen and (max-width: 768px)  {
  .title-container {
    width: 329px;
  }
}
</style>
