<template>
    <section class="bb grid items-center justify-items-center">
        <section class="flex justify-around mt-[175px]">
            <section class="grid text-center mt-[75px]">
                <h2 class="font-bold text-4xl flex justify-center items-center">Крупнейшая платформа</h2>
                <h2 class="font-bold text-4xl flex justify-center items-center">добрых дел</h2>
                <section class="flex gap-5 mt-10 justify-center mb-[500px]">
                    <button class="border-2 border-black rounded-sm p-3 text-xl" type="button">Хочу помочь</button>
                    <button id="btnnn" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter" class="border-2 border-black rounded-sm p-3 text-xl" type="button">Стать организатором</button>
                </section>
            </section>
            <Heart class="heart mt-[100px]" />
        </section>
        <section class="grid rounded-lg p-10 gap-5 justify-items-center">
            <section class="grid justify-center bg-[#fffcfc] rounded-lg p-10">
                <section class="bg-blend-color-dodge mr-[600px]">
                    <h2 class="font-bold text-4xl flex justify-start">Добрые дела рядом с вами</h2>
                </section>
                <section class="grid grid-cols-3 gap-5">
                    <Card v-for="(card, index) in cards" :key="index" :img="card.img" :title="card.title"
                        :content="card.content" :city="card.city" :dataMp="card.dataMp" :timeMp="card.timeMp" />
                </section>
            </section>
            <AboutMe/>
            <Form/>
        </section>
    </section>
</template>

<script setup>

import Footer from '../Footer/Footer.vue';
import Heart from '../More/Heart.vue';
import AboutMe from './AboutMe.vue';
import Card from './Card.vue';
import Form from './Form.vue';

// const starsOrg = ref('');

const cards = [
    { img: 'https://avatars.mds.yandex.net/i?id=d321bdb3d16d74f804a631c4f6a45504_l-4580245-images-thumbs&n=13', title: 'Всемирные Игры Дружбы..', city: 'г. Самара', dataMp: '24 апреля 2025 года', timeMp: '12:00 - 18:00' },
    { img: 'https://old.xn----ctbhcbtapdmikb4a2a0m.xn--p1ai/wp-content/uploads/2019/10/varvaragertye_28-10-146.jpg', title: 'У медиков огромное будущее..', city: 'г. Тамбов', dataMp: '26 апреля 2025 года', timeMp: '10:00 - 18:00' },
    { img: 'https://cdn.culture.ru/images/de67f6ea-3b14-5a98-9d68-46b94329c273', title: 'Всероссийская акция..', city: 'г. Великий Новгород', dataMp: '1 мая 2025 года', timeMp: '12:00 - 15:00' },
    // { img: 'https://avatars.mds.yandex.net/i?id=8f29110a33eca2c2a237be2e9a3d98db_l-4910248-images-thumbs&n=13', title: 'Сплочённое объединение воло..', city: 'г. Санкт-Петербург', dataMp: '5 мая 2025 года', timeMp: '8:00 - 18:00' },

];






// const btnnn = document.getElementById('btnnn');
// starsOrg = document.getElementById('starsOrg');
// <-- BUTTON: стать организатором --> 

// const handleMouseEnter = () => {
//     const starsOrg = document.getElementById('starsOrg');
    
//     gsap.to(starsOrg, {
//         opacity: 1,
//         scale: 1.1,
//         duration: 0.5,
//         ease: "power2.out",
//         yoyo: true,
//         repeat: 1
//     });
// };

// const handleMouseLeave = () => {
//     const starsOrg = document.getElementById('starsOrg');
    
//     gsap.to(starsOrg, {
//         opacity: 0,
//         scale: 1,
//         duration: 0.5,
//         ease: "power2.out"
//     });
// }
</script>

<style>

.bb {
    
      border: 0 solid transparent;
      border-width: 0 22.5vh;
      box-sizing: border-box;
    
}

</style>
