<template>
  <div class="home">
    <div class="cont">
      <div class="i">
        W hołdzie Pastolektorowi i wszystkim poległym Anonom, które stworzyły
        wspaniąłą kulturę past.
      </div>
      <div class="info">
        <span class="b">Pastolatarnia</span>
        to projekt mający na celu zebranie w całość wszystkich past w jedno
        miejsce. Zainteresowanych współpracą anonów chcących dołożyć swoją
        cegiełkę zapraszam do wysyłania na adres mailowy.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    document.title = 'Pastolatarnia'
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
  background: url('../assets/hero_dark.png');
  background-size: cover;
  background-position: center;
}
img {
  width: 120px;
  margin-top: 20px;
  border-radius: 20px;
}

.cont {
  max-width: 1000px;
}

.i {
  font-style: italic;
  margin-bottom: 10px;
}

.b {
  font-weight: 500;
}
</style>
