<template>
  <div class="container" :style="{backgroundImage: 'url(' + pageData.landing_sec_header_cta.background_img + ')'}">

   <!--  <div class="logo-container">logo</div>
    <div class="text-container">text</div>
    <div class="cta-container">cta</div> -->

    <div class="logo-container">
      <div class="img-container">
        <img :src="pageData.landing_sec_header_cta.logo" alt="">
      </div>

    </div>
    <div class="text-container">
      <div class="title-container">
        <span class="title">{{ pageData.landing_sec_header_cta.title }}</span>
      </div>
      <div class="subtitle-container">
        <span class="subtitle">{{ pageData.landing_sec_header_cta.subtitle }}</span>
      </div>
      <!-- <span class="title">{{ pageData.landing_sec_header_cta.title }}</span><br/>
      <span class="subtitle">{{ pageData.landing_sec_header_cta.subtitle }}</span> -->
    </div>
    <div class="cta-container">
      <button class="cta-btn">{{ pageData.landing_sec_header_cta.btn_title }}</button>
    </div>




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
  display: flex;
  flex-direction: column;
  background-position: center top;
  background-size: cover;
  height: 750px;
  align-items: center;
}
.logo-container, .text-container, .cta-container {
  /*position: ;border: 4px solid red;
  width: 100px;
  height: 100px; */
  display: flex;
  flex-direction: column;
}
.logo-container {
  flex: 3;
}

.img-container {
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
}
img {
  width: 32%;
}

.text-container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  border-radius: 145px;
  width: 550px;
}
.cta-container {
  display: flex;
  flex: 1;
  justify-content: center;
}
.title {
  font-size: 48px;
  color: white;
}
.subtitle {
  font-size: 28px;
  color: white;
}
.cta-btn {
  color:black;
  background: rgba(255,211,3,1);
  border-radius: 100px;
  border: none;
  font-size: 21px;
  width: 224px;
  height: 52px;
}

@media only screen and (max-width: 768px) {
  .container {
    height: 421px;
  }
  .text-container {
    border-radius: 12px;
    width: 296px;
  }
  .title {
    font-size: 24px;
  }
  .subtitle {
    font-size: 14px;
  }
  /* .logo-container {
    border: 4px solid blue;
  } */
  .cta-container {
    position: relative;
    bottom: 2rem;

  }

}

/* img {
   width: 30%;
}

@media (max-width:767px){
 img {
   width: 10%;
 }
} */
/* .container {
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
} */
</style>
