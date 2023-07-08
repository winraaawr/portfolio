<template>
  <div class="bg-gray-900">
    <Nav />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

</script>

<style>
html{
  scroll-behavior: smooth;
}
</style>
