<template>
    <div id="hero" class="container flex flex-col justify-center md:flex-row md:items-center min-h-screen w-full">
        <div class="flex flex-col w-full py-4 md:mr-4">
            <div class="flex items-center wrapper">
                <ul class="relative animate-text text-display text-white font-bold text-base">
                    <li><span class="relative after:border-l-rose-500 after:border-l-4  after:bg-gray-900">Hello!</span></li>
                    <li><span class="relative after:border-l-rose-500 after:border-l-4 after:bg-gray-900">Kumusta!</span>
                    </li>
                    <li><span class="relative after:border-l-rose-500 after:border-l-4 after:bg-gray-900">안녕하세요</span>
                    </li>
                    <li><span class="relative after:border-l-rose-500 after:border-l-4 after:bg-gray-900">こんにちは</span>
                    </li>
                    <li><span class="relative after:border-l-rose-500 after:border-l-4 after:bg-gray-900">Ola!</span>
                    </li>
                </ul>
            </div>
            <h1 class="text-display text-white font-extrabold uppercase text-5xl md:text-7xl">John Matthew Lubi</h1>
            <h2 class="text-display text-rose-500 text-lg md:text-xl mb-4">Aspiring Web Developer</h2>
            <span class="text-white text-body text-sm md:text-base md:w-[600px] mb-6">
                A passionate and highly motivated recent IT graduate, specializing in web development. I am eager to learn and continuously grow not just as a professional, but as well as an individual.
            </span>
            <div class="flex">
                <a class="relative flex flex-row items-center text-white text-display underline-offset-4 
                hover:text-rose-500 transition duration-100 group" href="#about">
                    More about me
                    <ArrowLongRightIcon
                        class="ml-2 h-5 w-5 absolute top-[10%] -right-8 group-hover:-right-10 duration-100" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
.animate-text {
    height: 60px;
    line-height: 60px;
    overflow: hidden;
}

.animate-text li {
    list-style: none;
    position: relative;
    font-size: 40px;
    top: 0;
    animation: slide 15s steps(5) infinite;
    /* +3 every steps added */
}

@keyframes slide {
    100% {
        top: -300px;
        /* +60 every element added */
    }
}

.animate-text li span::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    animation: typing 3s steps(8) infinite;
}

@keyframes typing {

    40%,
    60% {
        left: calc(100% + 25px);
    }

    100% {
        left: 0;
    }
}
</style>

