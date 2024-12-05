<template>
    <section
        class="mt-10 gap-3 w-auto rounded-lg h-auto bg-card-gradient bg-blend-color-dodge border-2 border-black shadow-[#5a5a5a]">
        <section class="grid mb-10 text-center justify-stretch mt-[10px] px-5">
            <section class=" py-3">
                <img class="rounded-lg" :src="img" alt="">
            </section>
            <p class="block justify-self-start text-xl font-bold min-w-max">{{ title }}</p>
            <section class="grid gap-3 mt-5">
                <section class="flex gap-1">
                    <img :src="icons[0].icon_one" alt="" width="24px" height="24px">
                    <p class="text-lg font-medium">{{ city }}</p>
                </section>
                <section class="flex gap-1">
                    <img :src="icons[1].icon_two" alt="" width="24px" height="24px">
                    <p class="text-lg font-medium">{{ dataMp }}</p>
                </section>
                <section class="flex gap-1">
                    <img :src="icons[2].icon_three" alt="" width="24px" height="24px">
                    <p class="text-lg font-medium">{{ timeMp }}</p>
                </section>
            </section>
        </section>
    </section>
</template>

<script setup>

import { defineProps } from 'vue';

const icons = [
    { icon_one: '../../../public/marker.png' },
    { icon_two: '../../../public/calendar.png' },
    { icon_three: '../../../public/timer.png' },
];

// Определяем свойства, которые будут передаваться в компонент
const props = defineProps({
    city: {
        type: String,
        required: true,
    },
    timeMp: {
        type: String,
        required: true,
    },
    dataMp: {
        type: String,
        required: true,
    },
    img: {
        type: Image,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

</script>