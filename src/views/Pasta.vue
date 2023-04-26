<template>
  <div class="moved" />

  <div>
    <div class="content">
      <div class="name" v-html="pasta.name" />
      <article v-html="content" />

      <div class="buttons">
        <div class="button" @click="copy()">Skopiuj</div>
      </div>

      <div v-if="pasta.link" class="cont">
        <div class="img-container">
          <img src="@/assets/video.png" />
          <iframe
            width="1280"
            heigt="720"
            :src="`https://www.youtube.com/embed/${pasta.link}`"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/utilities/axios'
import pasty from '@/data/data'

export default defineComponent({
  data() {
    return {
      content: '',
      pasta: pasty.find(
        (pasta) => (pasta.id = this.$route.params.id as string)
      ),
    }
  },
  methods: {
    async copy() {
      try {
        await navigator.clipboard.writeText(this.content)
        this.$notify({
          type: 'info',
          title: 'Skopiowano',
          text: 'Skopiowano do schowka',
        })
      } catch ($e) {
        this.$notify({
          type: 'error',
          title: 'Niepowodzenie',
          text: 'Nie udało się skopiować pasty',
        })
      }
    },
  },
  mounted() {
    axios.get(`/pasta-data/${this.$route.params.id}.txt`).then((res) => {
      this.content = res.data
    })
  },
})
</script>

<style lang="scss" scoped>
div {
  flex-grow: 1;
}

.content {
  width: 1400px;
  max-width: 95vw;
  margin: 20px auto;

  padding: 10px;
}

.name {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 22px;
  text-transform: uppercase;
}

article {
  text-align: justify;
  font-size: 16px;
  white-space: pre-wrap;
}

.cont {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .sub {
    text-align: center;
    padding-bottom: 10px;
    font-style: italic;
    width: 100%;

    font-size: 16.5px;

    @media (max-width: 1000px) {
      font-size: 13.5px;
    }
  }
}

.img-container {
  max-height: 400px;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 100%;

    &.border {
      border-radius: 10px;
    }
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

.button {
  background: #e28c00;
  color: #e3e3e3;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

.buttons {
  margin: 15px;
}
</style>
