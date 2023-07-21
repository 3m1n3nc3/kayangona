<template>
  <section id="features" class="services-area pt-120">
    <div class="container">
      <div class="justify-center row" v-if="title">
        <div class="w-full lg:w-2/3">
          <div class="pb-10 text-center section-title">
            <div class="m-auto line"></div>
            <h3 class="title">
              <Highlighter
                class="text-4xl text-gray-700"
                highlightClassName="font-bold bg-transparent text-gray-700"
                :searchWords="keywords"
                :autoEscape="true"
                :textToHighlight="title"
              />
            </h3>
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->
      <div class="justify-center row">
        <div class="w-full sm:w-2/3 lg:w-1/3" :key="feature" v-for="(feature, i) in features">
          <div class="single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <div class="services-icon">
              <img class="shape" src="/src/assets/images/services-shape.svg" alt="shape" />
              <img
                class="shape-1"
                :src="`src/assets/images/services-shape-${i + 1}.svg`"
                alt="shape"
              />
              <i class="lni lni-baloon"></i>
            </div>
            <div class="mt-8 services-content">
              <h4 class="mb-8 text-xl font-bold text-gray-900">{{ feature.title }}</h4>
              <p class="mb-8">
                {{ feature.description }}
              </p>
              <a
                :href="
                  (feature.link.to?.name
                    ? $router.resolve({
                        name: feature.link.to.name,
                        params: feature.link.to.params
                      }).href
                    : feature.link.to || feature.link) +
                  (feature.link.to.hash ? '#' + feature.link.to.hash : '')
                "
                class="duration-300 hover:text-theme-color"
                v-if="feature.link"
              >
                {{ feature.link.title || 'Learn More' }} <i class="ml-2 lni lni-chevron-right"></i>
              </a>
            </div>
          </div>
          <!-- single services -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>

<script setup>
import Highlighter from 'vue-highlight-words'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String
  },
  highlight: {
    type: String
  },
  features: {
    type: Array,
    default: () => []
  }
})
const keywords = computed(() => {
  return (props.highlight || '').split(' ')
})
</script>
