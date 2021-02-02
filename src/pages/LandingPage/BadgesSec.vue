<template>
<div>
  <badges-sec-header />
  <div class="grid-container">
    <badge v-for="badge in pageData.badges" :key="badge.id" :icon="badge.icon" />
  </div>

</div>
</template>
<script>
import BadgesSecHeader from '../../components/BadgesSecHeader';
import Badge from '../../components/Badge';
import landingPageData from '../../assets/landingPageData';
export default {
  data() {
    return {
      pageData: landingPageData.badges_sec
    }
  },
  components: {
    BadgesSecHeader,
    Badge
  }
}
</script>
<style lang="postcss" scoped>
.grid-container {
  display: grid;
   grid-template-columns: 250px 250px 250px;
   justify-items: center;
   width: 800px;
   grid-gap: 15px;
   margin: auto;
}
</style>
