<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <nav>
    <Navbar />
  </nav>
  <main class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.container {
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main .container {
  flex-grow: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
