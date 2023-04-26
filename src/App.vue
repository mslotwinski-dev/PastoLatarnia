<template>
  <main class="app">
    <Navbar />
    <notifications position="bottom left" width="400px" />
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import '@mslotwinski/mango-ui/'

import Navbar from '@/components/Shared/Navbar/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
  },
})
</script>

<style lang="scss">
@import './styles/index.scss';
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.moved {
  width: 100vw;
  height: $height;
  // height: 120px;
  @media (max-width: 1000px) {
    height: $heightmob;
  }
}
</style>
