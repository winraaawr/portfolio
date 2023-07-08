<template>
    <div class="w-screen bg-transparent fixed z-10">
        <nav class="relative w-full md:container md:p-4">
            <button @click="toggleMenu()"
            class="block absolute md:hidden right-2 top-2 p-2 z-50">
                <Bars3BottomRightIcon class="text-white h-6 w-6 transition-all" />
            </button>
            <ul
                class="flex flex-col h-screen py-24 px-6 space-y-8 bg-rose-500/20 backdrop-blur-md md:backdrop-blur-none md:px-4 md:py-6 md:space-y-0 md:bg-transparent md:h-auto md:flex-row md:justify-end md:space-x-16 md:translate-x-0 transition-all duration-300 ease-in-out origin-left"
                :class="[menuStatus ? 'flex flex-col traslate-x-0 z-40' : 'absolute md:static -translate-x-[700px] -z-40']">
                <li><a class="md:mt-0 text-display text-white/80" href="#hero">Home</a></li>
                <li><a class="md:mt-0 text-display text-white/80" href="#about">About</a></li>
                <li><a class="text-display text-white/80" href="#projects">Projects</a></li>
                <li><a class="text-display text-white/80" href="#contact">Contact</a></li>
            </ul>

        </nav>
    </div>
</template>

<script setup>
import { Bars3BottomRightIcon, ArrowLeftCircleIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const menuStatus = ref(false);

function toggleMenu(){
    menuStatus.value = !menuStatus.value
}

</script>
