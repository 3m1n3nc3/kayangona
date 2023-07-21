<script setup>
import PageHeader from '../components/PageHeader.vue'
import AboutSection from '../components/AboutSection.vue'
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
                Everything you need
                <span> to know about us!</span>
              </h3>
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="justify-center row">
          <div class="flex justify-center w-full">
            <div
              class="w-2/3 p-0 m-0 overflow-hidden shadow-lg rounded-2xl wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <img class="shape" src="/images/about.jpg" alt="shape" />
            </div>
            <!-- single services -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <AboutSection
      id="about"
      highlight="Problem"
      title="The problem we solve"
      info="Smallholder farmers in rural communities of Nigeria who forms 70% of Nigeria's labour force are grossly under producing and this is leading to acute food shortage, poverty and hunger. They are grossly under producing at an average of 1.2 tons per hectare when compared to an average of 3-5 tons per hectare of other developing countries, and this is currently leading to acute food shortage, poverty and hunger in the country. The biggest problem causing the low productivity of rural farmers is inadequate use of farm inputs such as quality seeds and fertilizers and the barriers limiting smallholder farmers in Nigeria from using farm inputs adequately are high upfront cost of farm inputs and poor distribution network."
      image="images/about1.svg"
    />

    <AboutSection
      id="solution"
      type="alt"
      highlight="Solution"
      title="Our Solution"
      info="Kayan gona agro network distributes farm inputs of fertilizers and quality seeds as well as agronomic training to farmers in rural communities through a credit and gradual saving approach with a rural agency system that helps farmers to timely receive the farm inputs in their communities. Farmers can use either our credit approach or gradual saving approach as it suits them to access farm inputs from us. Kayan gona agro network currently operates in Kaduna state, Northwest, Nigeria. We are targeting the 5 million farmers in Northwestern Nigeria and we have a specific goal of reaching over 200,000 smallholder farmers with our services in 5 years and we are passionately committed to this goal as a team. Our service saves smallholder farmers from travelling long distances in search of farm inputs, reduces their budget cost by over 25% and helps in timely application of the farm inputs which increases harvest yields to over 3 tons per hectare and thus improve the livelihood of smallholder farmers in rural communities, increase food production and reduction in hunger in Nigeria bringing about an enduring impact. We have an experienced team with passion and commitment, we have partnered with numerous farmers associations and cooperative in helping farmers easily access our services."
      image="images/about2.svg"
    />

    <AboutSection
      id="impact"
      type="alt2"
      highlight="Impact"
      title="Our Impact"
      info="Our service has impacted the live of smallholder farmers in rural communities by saving them from travelling long distances in search of farm inputs, reduce their budget cost by over 25% and help them in timely application of the farm inputs which will increase their harvest yields to over 3 tons per hectare, improve their livelihood and boost their income. Our extension service in the form of a training on Micro-dosing, seed spacing and other farm best practices has ensured that seeds and fertilizer produce maximum yields for farmers. We shall offer these training in clusters at the beginning of every farming season so that what the farmers will learn would still be fresh in their minds towards ensuring effective practical usage of the knowledge they’ve acquired and this will empower them to increase their productivity, avert unforeseen losses and uplift themselves and households out of poverty and hunger."
      image="images/about3.svg"
    />
  </v-fragment>
</template>
