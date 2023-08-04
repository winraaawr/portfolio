<template>
    <div id="about" class="container my-2 text-white h-auto md:h-[75vh] w-full">
        <div class="w-full py-4">
            <div class="flex flex-col-reverse md:flex-row md:justify-between">
                <div class="flex flex-col w-full justify-center md:mr-4">
                    <h1 class="text-display font-bold text-3xl mb-4">About me</h1>
                    <span class="mr-4 text-body text-sm md:text-base">
                        My name is <span class="text-rose-500 font-bold">John Matthew Lubi</span>, from Dasmariñas, Cavite,
                        Philippines.
                        I recently graduated last April 26, 2023 as
                        <span class="text-rose-500">
                            Bachelor of Science in Information Technology
                        </span>
                        at
                        <span class="text-rose-500">
                            Cavite State University - Carmona Campus. <br>
                        </span>
                        I am an aspiring web developer that is eager to explore and learn more about this field.
                    </span>
                    <div class="text-body text-sm md:text-base mt-4">
                        <span class="mb-4">
                            I am currently favoring to use the following technologies:
                        </span>
                        <div class="flex flex-wrap my-4">
                            <span
                                class="text-rose-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-rose-500 rounded-md ">Laravel</span>
                            <span
                                class="text-rose-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-rose-500 rounded-md ">Vue3</span>
                            <span
                                class="text-rose-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-rose-500 rounded-md ">Tailwindcss</span>
                        </div>
                        <span class="mt-4">
                            But, I'm open to learn, upskill, expand my knowledge. Currently I am interested the following technologies, especially:
                        </span>
                        <div class="flex flex-wrap my-4">
                            <span
                                class="text-emerald-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-emerald-500 rounded-md">Nuxt</span>
                            <span
                                class="text-emerald-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-emerald-500 rounded-md">Angular</span>
                            <span
                                class="text-emerald-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-emerald-500 rounded-md">Svelte</span>
                            <span
                                class="text-emerald-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-emerald-500 rounded-md">Python</span>
                                <span
                                class="text-emerald-500 text-sm mb-2 mr-2 px-2 py-0.5 border-2 border-emerald-500 rounded-md">Firebase</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="./Matthew-Lubi-Resume.pdf" target="_blank"
                            class="text-display bg-rose-500 py-3 px-3 text-sm rounded-md hover:bg-rose-600 hover:shadow-md transition-all ease-in-out">
                            View resume
                        </a>
                    </div>
                </div>
                <div class="relative flex flex-col w-full justify-start items-start md:mx-12 border-2 mb-8 rounded-md">
                    <img src="../assets/photo.jpg" alt="matthew's graduation picture"
                        class="h-[300px] w-full md:h-[500px] rounded-md object-cover object-left-top">
                    <a href="./Matthew-Lubi-Resume.pdf" target="_blank"
                        class="absolute flex top-0 left-0 items-center justify-center h-full w-full opacity-0 text-sm text-display transition-all hover:opacity-100 hover:bg-rose-500/50 cursor-pointer">
                        i hate how i look on my grad pic,
                        <br>please see my resume for my pic
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
