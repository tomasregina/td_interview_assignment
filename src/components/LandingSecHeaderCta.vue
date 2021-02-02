<template>
  <div class="container" :style="{backgroundImage: 'url(' + pageData.landing_sec_header_cta.background_img + ')'}">
    <div class="logo-container">
      <img :src="pageData.landing_sec_header_cta.logo" alt="">
    </div>
    <div class="title-container">
      <span class="title">{{ pageData.landing_sec_header_cta.title }}</span><br/>
      <span class="subtitle">{{ pageData.landing_sec_header_cta.subtitle }}</span>

    </div>
    <button class="cta-btn">{{ pageData.landing_sec_header_cta.btn_title }}</button>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.landing_sec
    }
  },
  mounted() {
    console.log('landingPageData', landingPageData);
  }
}
</script>

<style lang="postcss" scoped>
.container {
  display: block;
  width: 100%;
  height: 750px;
  position: relative;
  background-position: center top;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
}
.logo-container {
  margin: 0 auto;
  width: 265px;
  position: relative;
  top: 25px;
}
.title-container {
  background: rgba(0,0,0,0.5);
  border-radius: 145px;
  color: white;
  position: absolute;
  top: 450px;
  left: 333px;
  width: 587px;
  height: 135px;
  text-align: center;

}

.title-container .title {
  font-size: 48px;
  line-height: 78px;
  }
.title-container .subtitle {
  font-size: 28px;
}

.cta-btn {
  color:black;
  background: rgba(255,211,3,1);
  border-radius: 100px;
  position: absolute;
  left: 533px;
  top: 619px;
  border: none;
  width: 224px;
  height: 52px;
  font-size: 21px;
}
</style>
