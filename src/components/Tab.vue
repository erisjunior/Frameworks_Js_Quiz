<script setup lang="ts">
  import { ref } from 'vue';
  import Button from './Button.vue';

  defineProps<{
    statement: string;
    answers?: string[];
  }>();

  const emit = defineEmits<{
    (e: 'onSelection', index: number): void;
  }>();

  const selected = ref(-1);

  function select(index: number) {
    selected.value = index;
  }

  function submit() {
    emit('onSelection', selected.value);
    selected.value = -1;
  }

</script>

<template>
  <div>
    <div class="question-box">
      <p></p>
      <h3>{{ statement }}</h3>
      <Button
        v-for="(answer, index) in answers"
        @click="select(index)"
        :focused="selected === index"
        :key="index"
      >{{ answer }}</Button>
    </div>
    <Button @click="submit">Enviar</Button>
  </div>
</template>

<style>
  .question-box {
    background: #F0F0F0;
    border: 1px solid #AAAAAA;
    border-radius: 10px;
    padding: 24px 22px 25px 23px;
    width: fit-content;

    margin-bottom: 10px;
  }

  .question-box p {
    font-style: italic;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 9px;
  }

  .question-box h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 28px;
  }

  .question-box button {
    margin-right: 21px;
  }
</style>
