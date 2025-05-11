<template>
  <div class="slides" ref="container">
    <section class="panel"><slides-welcome /></section>
    <section class="panel"><slides-technologies /></section>
    <section class="panel"><slides-about /></section>
    <section class="panel"><slides-team /></section>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const container = ref(null)
let currentIndex = 0
let isScrolling = false

onMounted(() => {
  const panels = container.value.querySelectorAll('.panel')
  const totalPanels = panels.length

  const goToSection = (index) => {
    if (index < 0 || index >= totalPanels) return
    isScrolling = true
    gsap.to(container.value, {
      y: -index * window.innerHeight,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        isScrolling = false
        currentIndex = index
      },
    })
  }

  const onWheel = (e) => {
    if (isScrolling) return

    if (e.deltaY > 50) {
      goToSection(currentIndex + 1)
    } else if (e.deltaY < -50) {
      goToSection(currentIndex - 1)
    }
  }

  window.addEventListener('wheel', onWheel, { passive: false })

  onBeforeUnmount(() => {
    window.removeEventListener('wheel', onWheel)
  })
})
</script>

<style scoped>
.slides {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.panel {
  height: 100vh;
  width: 100%;
}
</style>
