<template>
  <div class="item">
    <div class="name" v-html="pasta.name" />
    <div class="content" v-html="content" />
    <div class="button">
      <router-link :to="`/pasta/${pasta.id}`"> Przejdź dalej </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/utilities/axios'

export default defineComponent({
  props: ['pasta'],
  data() {
    return { content: '' }
  },
  mounted() {
    const getStr = (str: string) => str.split(/\s+/).slice(0, 100).join(' ')

    axios.get(`/pasta-data/${this.pasta.id}.txt`).then((res) => {
      this.content = getStr(res.data) + '...'
    })
  },
})
</script>

<style lang="scss" scoped>
.item {
  background: #e3e3e3;
  border-radius: 10px;
  display: flex;
  width: 95vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .name {
    font-size: 22px;
    font-weight: 500;
    padding: 10px;
  }
  .content {
    font-size: 16px;
    text-align: justify;
  }
  .button {
    text-align: right;
    margin: 10px;
    a {
      background: #e28c00;
      color: #e3e3e3;
      display: inline-block;
      padding: 8px 16px;
      border-radius: 5px;
    }
  }
}
</style>
