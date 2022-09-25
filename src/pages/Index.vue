<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  <div class="text-black divide-y">
    <landing-hero/>
    <about-me/>
    <mission-statement/>
    <my-services/>
    <contact-me/>
  </div>
  </Layout>
</template>

<script>
import LandingHero from '../components/LandingHero.vue'
import AboutMe from '../components/AboutMe.vue'
import MissionStatement from '../components/MissionStatement.vue'
import MyServices from '../components/MyServices.vue'
import ContactMe from '../components/ContactMe.vue'
require('../main.css');
export default {
  metaInfo: {
    title: 'Ovum Doula Care'
  },
  components: {
    LandingHero,
    AboutMe,
    MissionStatement,
    MyServices,
    ContactMe,
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
