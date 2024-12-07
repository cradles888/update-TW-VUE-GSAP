<template>
    <section>
        <section id="commonSection" class="flex m-10 gap-5 bg-[#fffcfc] rounded-lg">
            <section class="block w-fit p-10">
              <img class="rounded-lg" src="../../../public/for-volunteers.png" alt="">
              <section class="absolute grid -mt-[225px] ml-[40px] gap-3 justify-items-start">
                <h2 class="font-bold text-4xl mb-3">Волонтёрам</h2>
                <p class="text-lg">Станьте волонтером, чтобы помогать<br>
                  другим и получать уникальный опыт</p>
                <button @click="showModal" class="block items-center text-lg bg-[#7b2391] text-slate-50 py-3 px-10 rounded-lg" type="button">Стать волонтёром</button>
            </section>
            </section>
            <section class="block w-fit p-10">
              <img class="rounded-lg" src="../../../public/for-organizators.png" alt="">
              <section class="absolute grid -mt-[225px] ml-[40px] gap-3 justify-items-start">
                <h2 class="font-bold text-4xl mb-3">Организаторам</h2>
                <p class="text-lg">Зарегистрируйтесь, как организатор, чтобы<br> получать поддержку на развитие инициатив</p>
                <button @click="showModal" class="block items-center text-lg bg-[#7b2391] text-slate-50 py-3 px-10 rounded-lg" type="button">Стать волонтёром</button>
              </section>
            </section>
        </section>

        <section v-if="isModalOpen" class="backdrop"></section>

        <dialog id="modal" class="hidden bg-transparent p-10 absolute -mt-[750px]">
            <form action=""
                class="rounded-lg shadow-black/40 mt-[100px] mb-[100px] grid gap-3 justify-center border-2 p-[100px] border-black bg-form-gradient bg-blend-color-dodge">
                <h2 class="font-bold text-3xl -mt-10 py-[20px]">Регистрация</h2>
                <button type="button" @click="closeModal" class="absolute font-bold text-4xl rotate-45 -mt-[90px] ml-[350px]">+</button>
                <input type="text" class="py-3 px-5 pl-2 text-lg" placeholder="ФИО" />
                <select name="" id="" class="outline-none py-3 px-5 pl-2 text-lg">
                    <option value="" default>Мероприятие</option>
                    <option value="">Всемирные игры дружбы</option>
                    <option value="">У медиков огромное будущее</option>
                    <option value="">Всероссийская акция</option>
                </select>
                <input type="text" class="py-3 px-5 pl-2 text-lg" placeholder="Электронная почта для связи" />
                <button @click="closeModal" class="border-2 border-black rounded-sm p-3 text-xl" type="button">
                    Подать заявку
                </button>
            </form>
        </dialog>
    </section>
</template>

<script setup>

import { ref } from 'vue';

const for_volunteers = "../../../public/for-volunteers.png";
const for_organizators = "../../../public/for-organizators.png";

const isModalOpen = ref(false);
// const modal = ref();

const showModal = () => {
  isModalOpen.value = true;
  modal.style.display = 'block'; 
}

const closeModal = () => {
  isModalOpen.value = false;
  modal.style.display = 'none';
}

</script>

<style>

.backdrop {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  filter: blur(5px);
  position: fixed;
  background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(5px);
}

</style>