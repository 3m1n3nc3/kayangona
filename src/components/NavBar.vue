<template>
  <div class="navbar-area">
    <div class="container relative">
      <div class="row">
        <div class="w-full">
          <nav class="flex items-center justify-between navbar navbar-expand-lg">
            <RouterLink class="w-16 mr-4 navbar-brand" :to="{ name: 'home' }">
              <img :src="logo" alt="Logo" />
            </RouterLink>
            <button
              class="block navbar-toggler focus:outline-none lg:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarOne"
              aria-controls="navbarOne"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <div
              class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse- navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none"
              id="navbarOne"
            >
              <ul
                id="nav"
                class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
              >
                <li class="nav-item active">
                  <RouterLink
                    exact
                    exact-active-class="active"
                    class="page-scroll"
                    :to="{ name: 'home' }"
                    >Home</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink class="page-scroll" :to="{ name: 'services' }"
                    >Products & Services</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink class="page-scroll" :to="{ name: 'about' }">About</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="page-scroll" :to="{ name: 'gallery' }">Gallery</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="page-scroll" :to="{ name: 'contact' }">Contact Us</RouterLink>
                </li>
              </ul>
            </div>
            <!-- navbar collapse -->

            <div
              class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0"
            >
              <!-- <a class="main-btn gradient-btn" data-scroll-nav="0" href="#" rel="nofollow"
                    >Download Now</a
                  > -->
            </div>
          </nav>
          <!-- navbar -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </div>
  <!-- navbar area -->
</template>

<script setup>
import { onMounted, ref } from 'vue'
import logo1 from '../assets/logo.png'
import logo2 from '../assets/logo-2.png'

const logo = ref(logo1)

onMounted(() => {
  const sto = setTimeout(() => {
    document.querySelectorAll('.navbar-nav a').forEach((el) => {
      el.addEventListener('click', (e) => {
        document.querySelector('.navbar-nav .active').classList.remove('active')
        e.target.parentNode.classList.add('active')
        document.querySelector('.navbar-collapse').classList.remove('show')
        document.querySelector('.navbar-toggler').classList.remove('active')
      })
    })

    document.querySelector('.navbar-toggler').addEventListener('click', function () {
      document.querySelector('.navbar-collapse').classList.toggle('hidden')
      document.querySelector('.navbar-collapse').classList.toggle('show')
      document.querySelector('.navbar-toggler').classList.toggle('active')
      document.querySelector('.navbar-area').classList.toggle('active')
      if (logo.value === logo1) {
        logo.value = logo2
      } else {
        logo.value = logo1
      }
      console.log(logo.value)
    })
    clearTimeout(sto)
  }, 10)
})
</script>
