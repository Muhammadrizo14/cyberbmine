<template>
  <div class="flex flex-col h-screen">
    <div class="flex-grow  bg-[url(/img/leopard.png)] bg-no-repeat bg-cover  flex flex-col justify-between relative">
      <div class="absolute right-10 top-1/2 transform -translate-y-1/2">
        <navigation/>
      </div>
      <div class="w-[1500px] mx-auto pt-5 flex flex-col h-full justify-between">
        <nuxt-link to="/" class="flex gap-3 items-center text-white">
          <img src="/img/logo.png" class="w-[55px] h-[55px]" alt="cybermine-logo">
          <div>
            <p class="text-[#B7B7B7] text-sm">IT-КОМПАНИЯ</p>
            <h1 class="font-black text-5xl">КИБЕРМАЙН</h1>
          </div>
        </nuxt-link>


        <div class="flex-grow flex items-center">
          <ul class="flex gap-3 text-white flex-col">
            <li class="flex gap-3 items-center ">
              <nuxt-link to="/" class="font-medium text-xl">Бизнес-решения</nuxt-link>
              <svg width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07108 1L21 0.928955" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-xs">ПРЕДЛАГАЕМ НЕЧТО ГОТОВОЕ</p>
            </li>
            <li class="flex gap-3 items-center ">
              <nuxt-link to="/" class="font-medium text-xl">Услуги и цены</nuxt-link>
              <svg width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07108 1L21 0.928955" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-xs">ДОРАБАТЫВАЕМ ПОД РЫНОК</p>
            </li>
            <li class="flex gap-3 items-center ">
              <nuxt-link to="/" class="font-medium text-xl">IT-Аутсорсинг</nuxt-link>
              <svg width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07108 1L21 0.928955" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-xs">ПРОДОЛЖАЕМ ПОДДЕРЖИВАТЬ</p>
            </li>
            <li class="flex gap-3 items-center ">
              <nuxt-link to="/" class="font-medium text-xl">Кейсы</nuxt-link>
              <svg width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07108 1L21 0.928955" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-xs">СТАВИМ ВАШ ПРОЕКТ КАК ПРИМЕР</p>
            </li>
            <li class="flex gap-3 items-center ">
              <nuxt-link to="/" class="font-medium text-xl">Контакты</nuxt-link>
              <svg width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07108 1L21 0.928955" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-xs">ВСЕГДА НА СВЯЗИ</p>
            </li>
          </ul>
        </div>

        <div class="text-center mx-auto">
          <svg width="36" height="87" viewBox="0 0 36 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2001_2)">
              <path d="M17.929 42.25L18.0539 77.3039" stroke="#FFFCFC" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" shape-rendering="crispEdges"/>
            </g>
            <path
                d="M21.2143 0C23.014 0 24.7399 0.737498 26.0125 2.05025C27.2851 3.36301 28 5.14348 28 7V21C28 22.8565 27.2851 24.637 26.0125 25.9497C24.7399 27.2625 23.014 28 21.2143 28H15.7857C13.986 28 12.2601 27.2625 10.9875 25.9497C9.71492 24.637 9 22.8565 9 21V7C9 5.14348 9.71492 3.36301 10.9875 2.05025C12.2601 0.737498 13.986 0 15.7857 0H21.2143ZM18.5 5.6C18.1401 5.6 17.7949 5.7475 17.5404 6.01005C17.2858 6.2726 17.1429 6.6287 17.1429 7V12.6L17.1524 12.7638C17.1932 13.1181 17.3637 13.443 17.6289 13.672C17.8942 13.9011 18.2342 14.017 18.5795 13.996C18.9248 13.9751 19.2494 13.819 19.4868 13.5595C19.7243 13.3 19.8568 12.9568 19.8571 12.6V7L19.8476 6.8362C19.8088 6.49565 19.6501 6.18166 19.4016 5.9538C19.1532 5.72594 18.8324 5.60005 18.5 5.6Z"
                fill="white"/>
            <defs>
              <filter id="filter0_d_2001_2" x="12.429" y="40.75" width="11.125" height="46.0539"
                      filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2001_2"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2001_2" result="shape"/>
              </filter>
            </defs>
          </svg>

        </div>
        <div class="mb-2">
          <h2 class="text-white font-bold text-xl text-center w-1/3">В АЛЕКСИНЕ</h2>
        </div>
      </div>
      <div class="flex gap-3 items-center text-white mb-[-25px] w-[1500px] relative ">
        <h1 class="font-extrabold text-[64px]">РАЗРАБОТКА САЙТОВ</h1>
        <p class="font-extrabold text-xl">ПОД КЛЮЧ</p>
        <img src="/img/phone.png" alt="cybermine-example" class="w-[297px] h-[476px] absolute bottom-[25px] right-0">
      </div>
    </div>
    <div class="bg-white p-5 mt-0">
      <marquee behavior="left" direction="left">ОНЛАЙН-КАТАЛОГИОНЛАЙН-КАТАЛОГИОНЛАЙН-КАТАЛОГИ</marquee>
    </div>
  </div>
</template>

<script setup>

import Navigation from "~/components/navigation.vue";
</script>

<style lang="scss" scoped>

</style>
