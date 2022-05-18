<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import Button from '../components/Button.vue';
  import tabsData, { type Tab } from '../data/tabs';

  const props = defineProps<{
    tabs?: Tab[];
  }>();

  const tabsArrary = reactive<Tab[]>(props.tabs || tabsData);

  const current = ref(0);

  function setTab(index: number) {
    current.value = index;
  }
</script>

<template>
  <div class="tabs-container">
    <Button
      v-for="(tab, index) in tabsArrary"
      :key="index"
      @click="setTab(index)"
      :focused="current === index"
    >
      {{ tab.title }}
    </Button>
    <div class="tabs-box">
      {{ tabsArrary[current].text }}
    </div>
  </div>
</template>

<style>
  .tabs-container {
    width: 100%;
    height: 100%;
    margin: 58px 52px;
  }

  .tabs-container button {
    margin-right: 22px;
  }

  .tabs-container .tabs-box {
    margin-top: 19px;
    background: #F0F0F0;
    border: 1px solid #AAAAAA;
    border-radius: 10px;
    width: fit-content;
    padding: 26px 23px;

    min-width: 500px;
    max-width: 700px;
    min-height: 130px;

    font-size: 20px;
    line-height: 24px;
  }
</style>
