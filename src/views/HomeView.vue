<script setup>
import PageHeader from '../components/PageHeader.vue'
// import PartnersSliders from '../components/PartnersSlider.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import AboutSection from '../components/AboutSection.vue'
import VideoCounter from '../components/VideoCounter.vue'
// import TeamPart from '../components/TeamPart.vue'
// import TestimonialSection from '../components/TestimonialSection.vue'
// import BlogSection from '../components/BlogSection.vue'

const slides = [
  {
    title: 'Farm inputs credit',
    description:
      'We provide smallholders farmers that meet our criteria inputs (fertilizers and quality seeds) as short-term credit allowing them to gradually pay back throughout the farming season with a final deadline around the harvest season.',
    image: 'slides/farm-inputs-credit.jpg'
  },
  {
    title: 'Farm inputs savings',
    description:
      'Our farm input savings approach is a layaway system that leverages on mobile short code to allow farmers to save gradually towards their future farm inputs needs using our prepaid farm inputs saving card that comes in two different amounts of $1 and $2 cards.',
    image: 'slides/farm-inputs-savings.jpg'
  },
  {
    title: 'Agronomic Training',
    description:
      'Our extension service in the form of a training on Micro-dosing, seed spacing and other farm best practices ensures that seeds and fertilizer produce maximum yields for farmers.',
    image: 'slides/agronomic-training.jpg'
  }
]
</script>

<template>
  <v-fragment>
    <PageHeader :slides="slides" />

    <!-- <PartnersSliders /> -->

    <FeaturesSection
      title="Product & Services"
      highlight="&"
      :features="[
        {
          title: 'Farm inputs credit',
          description:
            'We provide smallholders farmers that meet our criteria inputs (fertilizers and quality seeds) as short-term credit allowing them to gradually pay back throughout the farming season.',
          link: { to: { name: 'services', hash: 'farm-inputs-credit' }, title: 'Learn More' }
        },
        {
          title: 'Farm inputs savings',
          description:
            'Our farm input savings approach is a layaway system that leverages on mobile short codes allowing farmers to save gradually towards their future farm inputs using our prepaid farm inputs cards.',
          link: { to: { name: 'services', hash: 'farm-inputs-savings' }, title: 'Learn More' }
        },
        {
          title: 'Agronomic Training',
          description:
            'Our extension service in the form of a training on Micro-dosing, seed spacing and other farm best practices ensures that seeds and fertilizer produce maximum yields for farmers.',
          link: { to: { name: 'services', hash: 'agronomic-training' }, title: 'Learn More' }
        }
      ]"
    />

    <AboutSection
      highlight="Problem"
      title="The problem we solve"
      info="Smallholder farmers in rural communities of Nigeria who forms 70% of Nigeria's labour force are grossly under producing and this is leading to acute food shortage, poverty and hunger."
      :link="{ to: { name: 'about', hash: 'about' }, title: 'Learn More' }"
      image="images/about1.svg"
    />

    <AboutSection
      id="solution"
      type="alt"
      highlight="Solution"
      title="Our Solution"
      info="Kayan gona agro network distributes farm inputs of fertilizers and quality seeds as well as agronomic training to farmers in rural communities through a credit and gradual saving approach with a rural agency system that helps farmers to timely receive the farm inputs in their communities."
      :link="{ to: { name: 'about', hash: 'solution' }, title: 'Learn More' }"
      image="images/about2.svg"
    />

    <AboutSection
      id="impact"
      type="alt2"
      highlight="Impact"
      title="Our Impact"
      info="Our service has impacted the live of smallholder farmers in rural communities by saving them from travelling long distances in search of farm inputs, reduce their budget cost by over 25% and help them in timely application of the farm inputs which will increase their harvest yields to over 3 tons per hectare, improve their livelihood and boost their income."
      :link="{ to: { name: 'about', hash: 'impact' }, title: 'Learn More' }"
      image="images/about3.svg"
    />

    <VideoCounter />

    <!-- <TeamPart /> -->

    <!-- <TestimonialSection /> -->

    <!-- <BlogSection /> -->
  </v-fragment>
</template>
