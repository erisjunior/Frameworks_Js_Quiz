<script setup lang="ts">
  import { ref } from 'vue';
  import Button from './Button.vue';
  import type IQuestion from '../types/question';

  defineProps<{
    questions: IQuestion[];
    currentIndex: number;
  }>();

  const emit = defineEmits<{
    (e: 'onSelect', index: number): void;
  }>();

  const selected = ref(-1);

  function select(index: number) {
    selected.value = index;
  }

  function submit() {
    if (selected.value === -1) {
      return;
    }

    emit('onSelect', selected.value);
    selected.value = -1;
  }

</script>

<template>
  <div>
    <div class="question-box">
      <p>Questão {{ currentIndex + 1 }} de {{ questions.length }}</p>
      <h3>{{ questions[currentIndex].statement }}</h3>
      <Button
        v-for="(answer, index) in questions[currentIndex].answers"
        @click="select(index)"
        :focused="selected === index"
        :key="index"
      >
        {{ answer }}
      </Button>
    </div>
    <Button @click="submit" :disabled="selected === -1">Confirmar resposta</Button>
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
