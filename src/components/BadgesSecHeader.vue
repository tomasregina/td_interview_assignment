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
      pageData: landingPageData.badges_sec.badges_sec_header
    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.title-container {
  text-align: center;
  max-width: 700px;

}
.descr-container {
  text-align: center;
  max-width: 700px;
}
.title-container span {
  font-size: 36px;
}
.descr-container span {
  font-size: 16px;
}

@media only screen and (max-width: 768px) {
  .title-container, .descr-container {
    max-width: 300px;
  }
}
/* .title-container span {
  font-size: 36px;
}
.descr-container span {
  font-size: 16px;
}
.title-container, .descr-container {
  width: 600px;
  margin: auto;
  text-align: center;
} */
</style>
