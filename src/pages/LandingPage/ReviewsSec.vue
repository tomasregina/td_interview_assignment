<template>
  <div class="container">
    <reviews-sec-header />
    <div class="grid-container">
      <review v-for="review in pageData.reviews"
      :key="review.id"
      :photo_url="review.photo_url"
      :review_text="review.review_text"
      :author="review.author"
      :author_bio="review.author_bio"
    />
    </div>

  </div>
</template>
<script>
import ReviewsSecHeader from '../../components/ReviewsSecHeader';
import Review from '../../components/Review';
import landingPageData from '../../assets/landingPageData'

export default {
  data() {
    return {
      pageData: landingPageData.reviews_sec
    }
  },
  components: {
    ReviewsSecHeader,
    Review
  }

}
</script>
<style lang="postcss">
.grid-container {
  display: grid;
  grid-template-columns: 390px 390px;
  justify-items: center;
  width: 800px;
  grid-gap: 15px;
  margin: auto;
}
</style>
