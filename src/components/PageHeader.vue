<template>
  <header class="header-area">
    <NavBar />
    <div
      id="home"
      class="header-hero"
      :style="{ backgroundImage: `url(${banner})` }"
      v-if="slides.length"
    >
      <swiper-container autoplay-delay="3500" loop="true">
        <swiper-slide :key="i" v-for="(slide, i) in slides">
          <div class="container">
            <div class="justify-center row">
              <div class="w-full lg:w-2/3">
                <div class="mb-12 text-center lg:pt-32 header-hero-content pt-28">
                  <h3
                    class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.2s"
                  >
                    We offer
                  </h3>
                  <h2
                    class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                  >
                    {{ slide.title }}
                  </h2>
                  <p
                    class="mb-8 text-white text wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                  >
                    {{ slide.description }}
                  </p>
                  <!-- <a
                    href="#"
                    class="main-btn gradient-btn gradient-btn-2 wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="1.1s"
                    >Get Started</a
                  > -->
                </div>
                <!-- header hero content -->
              </div>
            </div>
            <!-- row -->
            <div class="justify-center row">
              <div
                class="relative flex items-center w-full overflow-hidden lg:w-2/4 slide-image-holder bg-slate-50 rounded-tl-3xl rounded-br-3xl"
              >
                <div
                  class="z-[1] text-center header-hero-image wow fadeIn"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.4s"
                >
                  <img :src="slide.image" alt="hero" />
                </div>
                <div
                  class="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover blur-2xl"
                  :style="`background-image: url(${slide.image})`"
                ></div>
                <!-- header hero image -->
              </div>
            </div>
            <!-- row -->
            <!-- container -->
            <div id="particles-1" class="particles"></div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div
      v-else
      id="home"
      class="header-hero sm:h-80 h-36"
      :style="{ backgroundImage: `url(${banner})` }"
    ></div>
    <!-- header hero -->
  </header>
</template>

<script setup>
import NavBar from './NavBar.vue'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
import banner from '../assets/images/banner-bg.svg'
// register Swiper custom elements
register()

defineProps({
  slides: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.slide-image-holder {
  min-height: 400px;
}
</style>
