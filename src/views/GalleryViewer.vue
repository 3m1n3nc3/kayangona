<template>
  <v-fragment>
    <PageHeader />
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1
          class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"
        >
          Gallery
        </h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">See our products in action.</p>

        <div class="flex justify-center">
          <swiper-container
            style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
            class="w-full sm:w-2/3 mySwiper"
            thumbs-swiper=".mySwiper2"
            space-between="10"
            navigation="true"
          >
            <swiper-slide lazy="true" :key="index" v-for="index in 214">
              <div class="overflow-hidden rounded-lg bg-theme-color-2">
                <img
                  class="object-contain object-center w-full h-96"
                  :src="loadImg(index)"
                  alt=""
                />
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
        <div class="flex justify-center">
          <swiper-container
            class="w-full h-[5em] sm:w-2/3 mySwiper2 sm:h-[9em]"
            space-between="10"
            slides-per-view="6"
            free-mode="true"
            watch-slides-progress="true"
          >
            <swiper-slide lazy="true" :key="index" v-for="index in 214">
              <img class="object-cover object-center w-full h-full" :src="loadImg(index)" alt="" />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </section>
  </v-fragment>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import { register } from 'swiper/element/bundle'
register()

const loadImg = (index) => {
  return `/gallery/0${index}.jpg`
  // if (index < 10) {
  //   return `/gallery/0${index}.jpg`
  // } else if (index < 100) {
  //   return `/gallery/0${index}.jpg`
  // } else {
  //   return `/gallery/${index}.jpg`
  // }
}

const randSpan = (index) => {
  //   const rd = Math.floor(Math.random() * 4)
  if (index % 2 === 0) {
    return 2
  } else {
    return 1
  }
}
</script>
<style>
.mySwiper2 {
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper2 swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
