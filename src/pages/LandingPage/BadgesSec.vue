<template>
<div>
  <badges-sec-header />
    <div class="grid-container">
    <badge v-for="badge in pageData.badges"
      :key="badge.id"
      :icon="badge.icon"
      :title="badge.title"
      :descr="badge.descr"
       />
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
.flex-container {
  display: flex;

}
.grid-container {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  /* width: 800px; */
  grid-gap: 15px;
  margin: auto;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 230px;

  }
}

</style>
