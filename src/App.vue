<script setup>
import { RouterView } from 'vue-router'

import { useWindowScroll } from '@vueuse/core'
import { watch } from 'vue'
import logo from './assets/logo.png'
import logo2 from './assets/logo-2.png'
import footerBg from './assets/images/footer-bg.svg'

const { y } = useWindowScroll()

watch(y, (scroll) => {
  const bImage = document.querySelector('.navbar .navbar-brand img')
  if (scroll < 20) {
    document.querySelector('.navbar-area')?.classList.remove('sticky')
    if (bImage) bImage.attributes.src.value = logo
  } else {
    document.querySelector('.navbar-area')?.classList.add('sticky')
    if (bImage) bImage.attributes.src.value = logo2
  }
})
</script>

<template>
  <v-fragment>
    <div class="hidden preloader">
      <div class="loader">
        <div class="ytp-spinner">
          <div class="ytp-spinner-container">
            <div class="ytp-spinner-rotator">
              <div class="ytp-spinner-left">
                <div class="ytp-spinner-circle"></div>
              </div>
              <div class="ytp-spinner-right">
                <div class="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RouterView />

    <footer id="footer" class="relative z-10 footer-area pt-120">
      <div class="footer-bg" :style="{ backgroundImage: `url(${footerBg})` }"></div>
      <div class="container">
        <div
          class="px-6 pt-10 pb-20 mb-12 bg-white rounded-lg shadow-xl md:px-12 subscribe-area wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div class="row">
            <div class="w-full lg:w-1/2">
              <div class="lg:mt-12 subscribe-content">
                <h2 class="text-2xl font-bold sm:text-4xl subscribe-title">
                  Subscribe Our Newsletter
                  <span class="block font-normal">get reguler updates</span>
                </h2>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="mt-12 subscribe-form">
                <form action="#" class="relative focus:outline-none">
                  <input
                    type="email"
                    placeholder="Enter eamil"
                    class="w-full py-4 pl-6 pr-40 duration-300 border-2 rounded focus:border-theme-color focus:outline-none"
                  />
                  <button class="main-btn gradient-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- subscribe area -->
        <div class="footer-widget pb-120">
          <div class="row">
            <div class="w-4/5 md:w-3/5 lg:w-2/6">
              <div
                class="mt-12 footer-about wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <a class="inline-block mb-8 logo" href="index.html">
                  <img src="/src/assets/logo.png" alt="logo" class="w-40" />
                </a>
                <p class="pb-10 pr-10 leading-snug text-white">
                  There is so much we can do together to grow our community. Join us today and let's
                  make a difference.
                </p>
                <ul class="flex footer-social">
                  <li>
                    <a href="https://facebook.com/kayangonaagronetwork"
                      ><i class="lni lni-facebook-filled"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://facebook.com/kayangonaagronetwork"
                      ><i class="lni lni-twitter-filled"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://facebook.com/kayangonaagronetwork"
                      ><i class="lni lni-instagram-filled"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/kayan-gona-agro-network"
                      ><i class="lni lni-linkedin-original"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@kayangonaagronetwork"
                      ><i class="lni lni-youtube"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- footer about -->
            </div>
            <div class="w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6">
              <div class="row">
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div
                    class="mt-12 link-wrapper wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div class="footer-title">
                      <h4 class="mb-8 text-2xl font-bold text-white">Quick Link</h4>
                    </div>
                    <ul class="link">
                      <li><RouterLink :to="{ name: 'gallery' }">Gallery</RouterLink></li>
                      <li><a href="javascript:void(0)">Privacy Policy</a></li>
                      <li><a href="javascript:void(0)">Refund Policy</a></li>
                      <li><a href="javascript:void(0)">Terms of Service</a></li>
                    </ul>
                  </div>
                  <!-- footer wrapper -->
                </div>
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div
                    class="mt-12 link-wrapper wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    <div class="footer-title">
                      <h4 class="mb-8 text-2xl font-bold text-white">Resources</h4>
                    </div>
                    <ul class="link">
                      <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
                      <li><RouterLink :to="{ name: 'about' }">About Us</RouterLink></li>
                      <li><RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink></li>
                      <li>
                        <RouterLink :to="{ name: 'services' }">Products & Services</RouterLink>
                      </li>
                    </ul>
                  </div>
                  <!-- footer wrapper -->
                </div>
              </div>
            </div>
            <div class="w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6">
              <div
                class="mt-12 footer-contact wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div class="footer-title">
                  <h4 class="mb-8 text-2xl font-bold text-white">Contact Us</h4>
                </div>
                <ul class="contact">
                  <li>+2348068108609</li>
                  <li>+2349020752739</li>
                  <li>info@kayangonaagronetwork.com</li>
                  <li>Eesha Plaza opposite NNPC Quarters, <br />by Kachia Road Kaduna.</li>
                </ul>
              </div>
              <!-- footer contact -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- footer widget -->
        <div class="py-8 border-t border-gray-200 footer-copyright">
          <p class="text-white">
            Built with <i class="text-red-500 lni lni-heart"></i> by
            <a
              class="duration-300 hover:text-theme-color-2"
              href="https://hoolicontech.com"
              rel="nofollow"
              target="_blank"
              >Hoolicontech</a
            >
          </p>
        </div>
        <!-- footer copyright -->
      </div>
      <!-- container -->
      <div id="particles-2" class="particles"></div>
    </footer>

    <!--====== FOOTER PART ENDS ======-->

    <!--====== BACK TOP TOP PART START ======-->

    <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
  </v-fragment>
</template>
