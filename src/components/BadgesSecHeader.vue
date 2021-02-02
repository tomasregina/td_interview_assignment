<template>
  <div>
    <div class="title">
      <span>{{ pageData.title }}</span>
    </div>
    <div class="descr">
      <span>{{ pageData.descr }}</span>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.badges_sec.badges_sec_header
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
.title, .descr {
  width: 600px;
  margin: auto;
  text-align: center;
}
</style>
