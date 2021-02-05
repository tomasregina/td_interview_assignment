<template>
  <div class="container">
    <div v-for="(faq, idx) in pageData.faq_sec_faqs"
        :key="faq.id"
    >
    <span>{{ idx + 1 + '. ' + faq.ques }}</span>
    <span>{{ faq.answ }}</span>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.faq_sec
    }
  }
}
</script>
