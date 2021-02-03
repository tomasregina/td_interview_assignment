<template>
<div>
  <locations-sec-header />
  <vue-flex-waterfall
  col="3"
  col-spacing="2"
  :break-at="{ 900: 3, 600: 2, 300: 1 }"
  >
  <div class="test" v-for="location in masonryData" :key="location.id">
    <img :style="{ height: `${location.height}px`}" :src="location.photo_url" alt="">
  </div>
  </vue-flex-waterfall>
</div>
</template>
<script>
import LocationsSecHeader from '../../components/LocationsSecHeader';
import LocationsSecImgs from '../../components/LocationsSecImgs';
import VueFlexWaterfall from 'vue-flex-waterfall';
import landingPageData from '../../assets/landingPageData'
export default {
  data() {
    return {
      masonryData: landingPageData.locations_sec.locations_sec_imgs
    }
  },
  components: {
    LocationsSecHeader,
    VueFlexWaterfall
  }

}
</script>
<style lang="postcss" scoped>
</style>
