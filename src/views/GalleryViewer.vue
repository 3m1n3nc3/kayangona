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

        <div class="grid grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3 xl:grid-cols-4">
          <template v-for="index in 214">
            <!-- <div
            :key="index"
            :class="`bg-red-200 xl:col-span-${randSpan(index)}`"
            v-if="
              (randSpan(index - 1) == 1 && randSpan(index) == 1) ||
              (randSpan(index - 1) == 2 && randSpan(index) == 1) ||
              (randSpan(index - 1) == 1 && randSpan(index) == 2)
            "
          >
            <img
              class="object-cover object-top w-full rounded-lg h-96"
              :src="loadImg(index)"
              alt=""
            />
          </div> -->
            <div
              :key="index"
              :class="`rounded-lg overflow-hidden xl:col-span-${randSpan(index)}`"
              v-if="1"
            >
              <div
                class="absolute z-0 flex items-center justify-center w-10 h-10 text-2xl font-extrabold text-white rounded-tl-lg bg-primary"
              >
                {{ index }}
              </div>
              <img class="object-cover object-center w-full h-96" :src="loadImg(index)" alt="" />
              <!-- <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
            Best website collections
          </h2>
          <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
            Website
          </p> -->
            </div>
          </template>
        </div>
      </div>
    </section>
  </v-fragment>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
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
