<template>
  <div>
    <landing-sec-header-cta />
    <divider />
    <badges-sec />
    <news-sec />
    <!--<about-sec />
    <divider />
    <reviews-sec />
    <divider />
    <locations-sec />
    <entry-sec />
    <divider />
    <process-sec />
    <faq-sec />
    <bottom-entry-sec />
    <footer-sec /> -->

  </div>
</template>
<script>
// sections import
import BadgesSec from './BadgesSec';
import NewsSec from './NewsSec';
import AboutSec from './AboutSec';
import ReviewsSec from './ReviewsSec';
import LocationsSec from './LocationsSec';
import EntrySec from './EntrySec';
import ProcessSec from './ProcessSec';
import FaqSec from './FaqSec';
import BottomEntrySec from './BottomEntrySec';
import FooterSec from './FooterSec';
// components import
import LandingSecHeaderCta from '../../components/LandingSecHeaderCta'
import Divider from '../../components/Divider';
export default {
  components: {
    BadgesSec,
    NewsSec,
    AboutSec,
    ReviewsSec,
    LocationsSec,
    EntrySec,
    ProcessSec,
    FaqSec,
    BottomEntrySec,
    FooterSec,
    LandingSecHeaderCta,
    Divider
  }
}
</script>
