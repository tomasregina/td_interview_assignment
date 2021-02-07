<template>
  <div class="container" :style="{backgroundImage: 'url(' + pageData.backgroung_img + ')'}">
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
      pageData: landingPageData.about_sec.about
    }
  }
}
</script>
<style lang="postcss" scoped>
.container {
  background-size: cover;
  width: 100%;
  height: 675px;
  flex-direction: column;
  align-items: center;
  background-position: center center;
}
.title-container {
  font-size: 36px;
  text-align: center;
}
.descr-container {
  width: 690px;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  .container {
    height: 720px;
  }
  .title-container {
  width: 233px;
}
.descr-container {
  width: 250px;
}
}
/* .container {
  background-size: cover;
  width: 100%;
  height: 675px;
}
.title, .descr {
  width: 685px;
  margin: 0 auto  ;
  text-align: center;
}
.title span {
  font-size: 36px;
}
.descr span {
  font-size: 16px;
} */
</style>
