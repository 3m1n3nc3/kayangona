<template>
  <section class="relative pt-20 about-area" :id="sectionId" v-if="type === 'alt'">
    <div class="about-shape-2">
      <img src="/src/assets/images/about-shape-2.svg" alt="shape" />
    </div>
    <div class="container">
      <div class="row">
        <div class="w-full lg:w-1/2 lg:order-last">
          <div
            class="mx-4 mt-12 about-content wow fadeInLeftBig"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div class="mb-4 section-title">
              <div class="line"></div>
              <Highlighter
                class="text-4xl text-gray-700"
                highlightClassName="font-bold bg-transparent text-gray-700"
                :searchWords="keywords"
                :autoEscape="true"
                :textToHighlight="title"
              />
            </div>
            <!-- section title -->
            <p class="mb-8">
              {{ info }}
            </p>
            <a
              :href="
                (link.to?.name
                  ? $router.resolve({ name: link.to.name, params: link.to.params }).href
                  : link.to || link) + (link.to.hash ? '#' + link.to.hash : '')
              "
              class="main-btn gradient-btn"
              v-if="link"
            >
              {{ link.title || 'Learn More' }}
            </a>
          </div>
          <!-- about content -->
        </div>
        <div class="w-full lg:w-1/2 lg:order-first">
          <div
            class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <img :src="image" alt="about" />
          </div>
          <!-- about image -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
  <section class="relative pt-20 about-area" :id="sectionId" v-else-if="type === 'alt2'">
    <div class="container">
      <div class="row">
        <div class="w-full lg:w-1/2">
          <div
            class="mx-4 mt-12 about-content wow fadeInLeftBig"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div class="mb-4 section-title">
              <div class="line"></div>
              <Highlighter
                class="text-4xl text-gray-700"
                highlightClassName="font-bold bg-transparent text-gray-700"
                :searchWords="keywords"
                :autoEscape="true"
                :textToHighlight="title"
              />
            </div>
            <!-- section title -->
            <p class="mb-8">
              {{ info }}
            </p>
            <a
              :href="
                (link.to?.name
                  ? $router.resolve({ name: link.to.name, params: link.to.params }).href
                  : link.to || link) + (link.to.hash ? '#' + link.to.hash : '')
              "
              class="main-btn gradient-btn"
              v-if="link"
            >
              {{ link.title || 'Learn More' }}
            </a>
          </div>
          <!-- about content -->
        </div>
        <div class="w-full lg:w-1/2">
          <div
            class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <img :src="image" alt="about" />
          </div>
          <!-- about image -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
    <div class="about-shape-1">
      <img src="/src/assets/images/about-shape-1.svg" alt="shape" />
    </div>
  </section>
  <section v-else class="relative pt-20 about-area" :id="sectionId">
    <div class="container">
      <div class="row">
        <div class="w-full lg:w-1/2">
          <div
            class="mx-4 mt-12 about-content wow fadeInLeftBig"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div class="mb-4 section-title">
              <div class="line"></div>
              <Highlighter
                class="text-4xl text-gray-700"
                highlightClassName="font-bold bg-transparent text-gray-700"
                :searchWords="keywords"
                :autoEscape="true"
                :textToHighlight="title"
              />
            </div>
            <!-- section title -->
            <p class="mb-8">
              {{ info }}
            </p>
            <a
              :href="
                (link.to?.name
                  ? $router.resolve({ name: link.to.name, params: link.to.params }).href
                  : link.to || link) + (link.to.hash ? '#' + link.to.hash : '')
              "
              class="main-btn gradient-btn"
              v-if="link"
            >
              {{ link.title || 'Learn More' }}
            </a>
          </div>
          <!-- about content -->
        </div>
        <div class="w-full lg:w-1/2">
          <div
            class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <img :src="image" alt="about" />
          </div>
          <!-- about image -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
    <div class="about-shape-1">
      <img src="/src/assets/images/about-shape-1.svg" alt="shape" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Highlighter from 'vue-highlight-words'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  highlight: {
    type: String,
    default: 'Solution'
  },
  title: {
    type: String,
    default: 'The solution we provide'
  },
  info: {
    type: String
  },
  link: {
    type: [String, Object]
  },
  image: {
    type: String,
    default: 'images/about.svg'
  },
  id: {
    type: String
  }
})

const sectionId = computed(() => {
  return props.id ? props.id : 'about'
})
const keywords = computed(() => {
  return (props.highlight || '').split(' ')
})
</script>
