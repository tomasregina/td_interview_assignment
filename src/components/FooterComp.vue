<template>
  <div class="container">
    <span class="footer-cpr">{{ pageData.footer.copyright }}</span>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData'
export default {
  data() {
    return {
      pageData: landingPageData.footer_sec
    }
  }
}
</script>
