<template>
    <div id="projects" class="container flex flex-col py-8 my-8 h-auto md:min-h-[60vh] w-full">
        <h1 class="text-display font-bold text-3xl text-white">Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">

            <div class="flex flex-col w-full py-4 text-white">
                <span class="flex flex-row items-center justify-center mb-4 h-48 w-full bg-gray-800 rounded-md">
                    <img src="../assets/at-front-logo.png" class="h-24 w-auto object-cover object-center" alt="AniFox Logo">
                </span>
                <h2 class="text-display font-bold text-xl">at-Front</h2>
                <h3 class="text-display text-rose-500 mb-4">Personal Project</h3>
                <div class="flex flex-wrap mb-4">
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Spotify API</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Javascript</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Vue 3</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Tailwindcss</span>
                </div>
                <h6 class="text-body mb-2">Description</h6>
                <span class="mb-6 md:mr-8 text-body text-sm md:text-base">
                    A collection of front-end landing pages design.
                    <br>
                </span>
                <div class="flex">
                    <a class="text-display bg-rose-500 py-2 px-3 text-sm rounded-md hover:bg-rose-600 hover:shadow-md transition-all ease-in-out"
                        href="https://at-front.pages.dev/">View Project</a>
                </div>
            </div>

            <div class="flex flex-col w-full py-4 text-white">
                <span class="flex flex-row items-center justify-center mb-4 h-48 w-full bg-gray-800 rounded-md">
                    <img src="../assets/anifox-logo.png" class="h-24 w-auto object-cover object-center" alt="AniFox Logo">
                </span>
                <h2 class="text-display font-bold text-xl">AniFox</h2>
                <h3 class="text-display text-rose-500 mb-4">Personal Project</h3>
                <div class="flex flex-wrap mb-4">
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Jikan API</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Javascript</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Vue 3</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Tailwindcss</span>
                </div>
                <h6 class="text-body mb-2">Description</h6>
                <span class="mb-6 md:mr-8 text-body text-sm md:text-base">
                    An anime discovery web application powered by Jikan API, MyAnimeList's unofficial open-source API.
                    <br>
                </span>
                <div class="flex">
                    <a class="text-display bg-rose-500 py-2 px-3 text-sm rounded-md hover:bg-rose-600 hover:shadow-md transition-all ease-in-out"
                        href="https://winraaawr.github.io/anifox/">View Project</a>
                </div>
            </div>

            <div class="flex flex-col w-full py-4 md:mr-4 text-white">
                <span class="flex flex-row items-center justify-center mb-4 h-48 w-full bg-pink-400 rounded-md">
                    <img src="../assets/cakey-logo.png" class="h-36 w-auto object-cover object-center" alt="cakey logo">
                </span>
                <h2 class="text-display font-bold text-xl">Cakey: An Online Cake Ordering System</h2>
                <h3 class="text-display text-rose-500 mb-4">Capstone Project</h3>
                <div class="flex flex-wrap mb-4">
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">PHP</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Javascript</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">jQuery</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">Bootstrap</span>
                    <span class="text-xs border-2 border-rose-500 rounded-md mr-2 mb-2 px-2 py-1">MariaDB</span>
                </div>
                <h6 class="text-body mb-2">Description</h6>
                <span class="mb-6 md:mr-8 text-body text-sm md:text-base line-clamp-3">
                    Cakey is an Online Cake Ordering System
                    which was developed as Capstone Project in fulfillment of the
                    requirements for the degree Bachelor of Science in Information Technology in
                    Cavite State University - Carmona Campus

                    Cakey was made as a place where cake shops and cake enthusiasts could meet!
                    Cake shops can showcase their masterful crafts and artistic skills
                    while cake enthusiasts will be able to enjoy
                    premium cakes as well as personalized cakes.
                    Cakey is the Key to Custom Cakes!
                </span>
                <div class="flex">
                    <a class="text-display bg-rose-500 py-2 px-3 text-sm rounded-md hover:bg-rose-600 hover:shadow-md transition-all ease-in-out"
                        href="https://cakey.x10.mx" target="_blank">View Project</a>
                </div>
            </div>

            

        </div>
    </div>
</template>

<script setup>
import { Square3Stack3DIcon } from '@heroicons/vue/24/solid';
</script>
