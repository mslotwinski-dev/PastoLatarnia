<template>
  <div class="moved" />

  <div class="home">
    <div>
      <div>
        W hołdzie Pastolektorowi i wszystkim poległym Anonom, które stworzyły
        wspaniąłą kulturę past.
      </div>
      <img src="@/assets/hero.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
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
img {
  width: 1200px;
  max-width: 100vw;
  margin-top: 20px;
}
</style>
