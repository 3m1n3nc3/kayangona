<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import TDialog from '../components/TDialog.vue'

const route = useRoute()
const openVideoDialog = ref((route.query?.success == 'true' && !!route.query?.message) || false)

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/kayangonaagronetwork',
    icon: 'lni lni-facebook-original'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kayangonaagronetwork',
    icon: 'lni lni-instagram-original'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@kayangonaagronetwork',
    icon: 'lni lni-youtube'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/kayan-gona-agro-network',
    icon: 'lni lni-linkedin-original'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Kayan_gona_agro',
    icon: 'lni lni-twitter-original'
  }
]
</script>

<template>
  <v-fragment>
    <PageHeader />

    <section id="features" class="pt-10 services-area">
      <div class="container">
        <div class="justify-center row">
          <div class="w-full lg:w-2/3">
            <div class="pb-10 text-center section-title">
              <div class="m-auto line"></div>
              <h3 class="title">
                Get in
                <span> touch with us!</span>
              </h3>
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="justify-center row">
          <div class="flex justify-center w-full">
            <div
              class="w-full min-h-[300px] p-0 m-0 overflow-hidden shadow-lg rounded-2xl wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.151675546865!2d7.4164483751369055!3d10.488707064434653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d354968884b09%3A0x10daecde84ce4edf!2sEesha%20plaza!5e0!3m2!1sen!2sng!4v1687521295940!5m2!1sen!2sng"
                width="100%"
                height="100%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <!-- single services -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

    <section class="relative pt-20 about-area">
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
                <h3 class="title">Contact <span>Information</span></h3>
              </div>
              <!-- section title -->
              <p class="max-w-3xl mt-6 text-base text-primary">
                Want to get in touch? Fill out the form below to send us a message and we will get
                back to you as soon as possible!
              </p>
              <dl class="mt-8 space-y-3">
                <dt><span class="sr-only">Phone number</span></dt>
                <dd class="flex text-base text-theme-color">
                  <i
                    class="flex-shrink-0 w-6 h-6 text-theme-color-2 lni lni-phone"
                    aria-hidden="true"
                  />
                  <span>08068108609, 09020752739</span>
                </dd>
                <dt><span class="sr-only">Email</span></dt>
                <dd class="flex text-base text-theme-color">
                  <i
                    class="flex-shrink-0 w-6 h-6 text-theme-color-2 lni lni-envelope"
                    aria-hidden="true"
                  />
                  <span>info@kayangonaagronetwork.com</span>
                </dd>
                <dt><span class="sr-only">Address</span></dt>
                <dd class="flex text-base text-theme-color">
                  <i
                    class="flex-shrink-0 w-6 h-6 text-theme-color-2 lni lni-map"
                    aria-hidden="true"
                  />
                  <span>Eesha Plaza opposite NNPC quarters Kachia road, mahuta, Kaduna.</span>
                </dd>
              </dl>
              <ul role="list" class="flex mt-6 space-x-12">
                <li :key="social.name" v-for="social in socials">
                  <a
                    class="text-indigo-200 hover:text-indigo-100"
                    :href="social.href"
                    target="_blank"
                  >
                    <span class="sr-only">{{ social.name }}</span>
                    <i :class="social.icon" class="w-6 h-6 lni text-theme-color-2"></i>
                  </a>
                </li>
              </ul>
            </div>
            <!-- about content -->
          </div>
          <div class="w-full lg:w-1/2">
            <div
              class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div class="relative overflow-hidden bg-transparent rounded-lg">
                <h2 class="sr-only">Contact Form</h2>

                <div class="grid grid-cols-1 lg:grid-cols-3">
                  <!-- Contact form -->
                  <div class="py-10 lg:col-span-3 xl:p-12">
                    <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
                    <form
                      action="/forms/contact-us.php"
                      method="POST"
                      class="grid grid-cols-1 mt-6 text-left gap-y-6 sm:grid-cols-2 sm:gap-x-2"
                      name="contact"
                    >
                      <input type="hidden" name="origin" :value="$route.fullPath" />
                      <div>
                        <label for="fullname" class="block text-sm font-medium text-gray-900"
                          >Full name</label
                        >
                        <div class="mt-1">
                          <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            autocomplete="name"
                            class="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                          />
                          <p
                            class="mt-2 text-sm text-red-600"
                            v-if="route.query?.success == 'false' && route.query?.fullname"
                          >
                            {{ route.query?.fullname }}
                          </p>
                        </div>
                      </div>
                      <div>
                        <label for="email" class="block text-sm font-medium text-gray-900"
                          >Email</label
                        >
                        <div class="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            class="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                          />
                          <p
                            class="mt-2 text-sm text-red-600"
                            v-if="route.query?.success == 'false' && route.query?.email"
                          >
                            {{ route.query?.email }}
                          </p>
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <label for="subject" class="block text-sm font-medium text-gray-900"
                          >Subject</label
                        >
                        <div class="mt-1">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            class="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                          />
                          <p
                            class="mt-2 text-sm text-red-600"
                            v-if="route.query?.success == 'false' && route.query?.subject"
                          >
                            {{ route.query?.subject }}
                          </p>
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <div class="flex justify-between">
                          <label for="message" class="block text-sm font-medium text-gray-900"
                            >Message</label
                          >
                          <span id="message-max" class="text-sm text-gray-500"
                            >Max. 500 characters</span
                          >
                        </div>
                        <div class="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows="4"
                            class="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                            aria-describedby="message-max"
                          />
                          <p
                            class="mt-2 text-sm text-red-600"
                            v-if="route.query?.success == 'false' && route.query?.message"
                          >
                            {{ route.query?.message }}
                          </p>
                        </div>
                      </div>
                      <div class="sm:col-span-2 sm:flex sm:justify-end">
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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

    <TDialog v-model="openVideoDialog" @closed="$router.push({ query: null })">
      <div
        class="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl opacity-100 rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle"
      >
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="p-4 rounded-md bg-green-50">
          <div class="flex">
            <div class="flex-shrink-0">
              <!-- Heroicon name: solid/check-circle -->
              <svg
                class="w-5 h-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-sm text-green-700">
                <p>
                  {{ route.query?.message }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TDialog>
  </v-fragment>
</template>
