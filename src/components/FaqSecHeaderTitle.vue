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
      pageData: landingPageData.faq_sec.faq_sec_header_text
    }
  }
}
</script>
