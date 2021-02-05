<template>
  <div class="container">
    <div v-for="(step, idx) in pageData.process_sec_steps"
      :key="step.id"
    >
      <span>{{idx+1 + '. ' + step.text}}</span>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.process_sec
    }
  }
}
</script>
