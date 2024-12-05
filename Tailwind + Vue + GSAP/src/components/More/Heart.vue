<template>
  <section ref="heart" class="heart"></section>
</template>

<style scoped>
.heart {
  width: 400px;
  height: 400px;
  background: linear-gradient(317.42deg, #fdd8fb 50.4%, #ff96f9 83.03%),
    url(../../../public/noise.png);
  transform: rotate(45deg);
  position: absolute;
  background-blend-mode: color-dodge;
  z-index: -1;
}

.heart::after,
.heart::before {
  content: '';
  display: flex;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(317.42deg, #fdd8fb 50.4%, #ff96f9 83.03%),
    url(../../../public/noise.png);
  background-blend-mode: color-dodge;
  position: absolute;
}

.heart::after {
  margin-top: -200px;
}

.heart::before {
  margin-left: -200px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heart = ref(null);

onMounted(() => {
  // Анимация изменения непрозрачности на 0 при прокрутке
  gsap.to(heart.value, {y: 0, opacity: 1},{
    scrollTrigger: {
      trigger: heart.value,
      start: "top top", // Начало триггера
      end: "bottom top", // Конец триггера
      scrub: true, // Включаем scrub для плавного изменения
    },
    opacity: 0,
    y: 100,
  });
});
</script>
