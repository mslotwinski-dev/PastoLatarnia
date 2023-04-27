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
    const getStr = (str: string) => str.split(/\s+/).slice(0, 70).join(' ')

    axios.get(`/pasta-data/${this.pasta.id}.txt`).then((res) => {
      this.content = getStr(res.data) + '...'
    })
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.item {
  background: $gray1;
  border-radius: 10px;
  display: flex;
  width: 95vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
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
      background: $orange;
      color: #e3e3e3;
      display: inline-block;
      padding: 8px 16px;
      border-radius: 5px;
    }
  }
}
</style>
