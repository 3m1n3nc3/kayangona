<script setup>
import { ref, watch } from 'vue'

const video = ref(null)
const paused = ref(true)
const play = () => {
  paused.value ? video.value.play() : video.value.pause()
}

watch(video, (val) => {
  if (val) {
    val.addEventListener('play', () => {
      paused.value = false
    })
    val.addEventListener('pause', () => {
      paused.value = true
    })
  }
})
</script>

<template>
  <section id="facts" class="pt-20 video-counter">
    <div class="container">
      <div class="row">
        <div class="w-full lg:w-1/2">
          <div
            class="relative flex justify-center pb-8 mt-12 video-content wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <img
              class="absolute bottom-0 left-0 -ml-8 dots"
              src="/src/assets/images/dots.svg"
              alt="dots"
            />
            <div class="relative mr-0 rounded-lg shadow-md sm:mr-6 video-wrapper">
              <div class="video-image">
                <video ref="video" class="min-h-[25em] object-cover object-center bg-theme-color-2">
                  <source src="/videos/1.mp4" type="video/mp4" />
                </video>
                <!-- <img src="/src/assets/images/video.png" alt="video" /> -->
              </div>
              <div
                class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-900 bg-opacity-25 rounded-lg video-icon"
              >
                <button class="video-popup" @click="play">
                  <i :class="`lni lni-${paused ? 'play' : 'pause'}`"></i>
                </button>
              </div>
            </div>
            <!-- video wrapper -->
          </div>
          <!-- video content -->
        </div>
        <div class="flex items-center w-full lg:w-1/2">
          <div
            class="pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.8s"
          >
            <div class="counter-content">
              <div class="mb-8 section-title">
                <div class="line"></div>
                <h3 class="title">Meet our <span> happy partners</span></h3>
              </div>
              <!-- section title -->
              <p class="text">
                Hear what recent beneficiaries of our services have to say about us, maybe you can
                be the next.
              </p>
            </div>
            <!-- counter content ::Currently Hidden::-->
            <template>
              <div class="row no-gutters">
                <div class="flex items-center justify-center single-counter counter-color-1">
                  <div class="text-center counter-items">
                    <span class="text-2xl font-bold text-white"
                      ><span class="counter">125</span>K</span
                    >
                    <p class="text-white">Downloads</p>
                  </div>
                </div>
                <!-- single counter -->
                <div class="flex items-center justify-center single-counter counter-color-2">
                  <div class="text-center counter-items">
                    <span class="text-2xl font-bold text-white"
                      ><span class="counter">87</span>K</span
                    >
                    <p class="text-white">Active Users</p>
                  </div>
                </div>
                <!-- single counter -->
                <div class="flex items-center justify-center single-counter counter-color-3">
                  <div class="text-center counter-items">
                    <span class="text-2xl font-bold text-white"
                      ><span class="counter">4.8</span></span
                    >
                    <p class="text-white">User Rating</p>
                  </div>
                </div>
                <!-- single counter -->
              </div>
            </template>
            <!-- row -->
          </div>
          <!-- counter wrapper -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>
