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
                Products
                <span> And Services</span>
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
              <img class="shape" src="/images/services.jpg" alt="shape" />
            </div>
            <!-- single services -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <AboutSection
      id="farm-inputs-credit"
      highlight="credit"
      title="Farm inputs credit"
      info="We provide smallholders farmers that meet our criteria inputs (fertilizers and quality seeds) as short-term credit allowing them to gradually pay back throughout the farming season with a final deadline around the harvest season. The inputs are given to farmers at an interest rate of 12% to 15%."
      image="/slides/farm-inputs-savings.jpg"
    />

    <AboutSection
      id="farm-inputs-savings"
      type="alt"
      highlight="savings"
      title="Farm inputs savings"
      info="Our farm input savings approach is a layaway system that leverages on mobile short code to allow farmers to save gradually towards their future farm inputs needs using our prepaid farm inputs saving card that comes in two different amounts of $1 and $2 cards. Smallholder farmers can buy these cards from our rural agents which comes in two different amounts (500 naira or $1 dollars, 1000 naira or $2), scratch it off, text the pin to our short code number and the face value is deposited in their account as saving towards their farm inputs needs. They can simply repeat this process to gradually save for their farm inputs needs without pressure especially during the period that precedes the commencement of the farming season, for example they can gradually save during the dry season and use the amount saved to buy inputs when the raining/farming season commences. The total amount the farmer has saved with us will be used by the farmer to purchase fertilizer and quality seeds, and the input will be delivered to their location at the exact time they need it."
      image="slides/farm-inputs-credit.jpg"
    />

    <AboutSection
      id="agronomic-training"
      type="alt2"
      highlight="Training"
      title="Agronomic Training"
      info="Our extension service in the form of a training on Micro-dosing, seed spacing and other farm best practices ensures that seeds and fertilizer produce maximum yields for farmers. We shall offer these training in clusters at the beginning of every farming season so that what the farmers will learn would still be fresh in their minds towards ensuring effective practical usage of the knowledge."
      image="slides/agronomic-training.jpg"
    />
  </v-fragment>
</template>
