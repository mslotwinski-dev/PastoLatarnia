<template>
  <div class="moved" />

  <div class="home">
    <Pasta v-for="pasta in pasty" :key="pasta" :pasta="pasta" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pasty from '@/data/data'
import Pasta from '@/components/Pasty/Pasta.vue'

export default defineComponent({
  data() {
    return {
      pasty,
    }
  },
  components: {
    Pasta,
  },
  mounted() {
    document.title = 'Pasty | Pastolatarnia'
  },
})
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
