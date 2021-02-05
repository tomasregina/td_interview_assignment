<template>
  <div class="container">
    <faq-sec-header-img />
    <divider />
    <faq-sec-header-title/>
    <faq-sec-faqs />

  </div>
</template>
<script>
import FaqSecHeaderImg from '../../components/FaqSecHeaderImg';
import FaqSecHeaderTitle from '../../components/FaqSecHeaderTitle';
import FaqSecFaqs from '../../components/FaqSecFaqs';
import Divider from '../../components/Divider';
export default {
  components: {
    FaqSecHeaderImg,
    FaqSecHeaderTitle,
    FaqSecFaqs,
    Divider
  }
}
</script>
