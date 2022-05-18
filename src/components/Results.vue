<script setup lang="ts">
  import Button from './Button.vue';
  import type IQuestion from '../types/question';

  defineProps<{
    questions: IQuestion[];
    answersIndexes: number[];
  }>();

  defineEmits<{
    (e: 'onRestart'): void;
  }>();
</script>

<template>
  <div>
    <div class="results-box">
      <div
        v-for="(question, index) in questions"
        :key="index"
      >
        <h3>Questão {{ index + 1 }}</h3>
        <p>{{ question.statement }}: {{ question.answers[answersIndexes[index]] }}</p>
      </div>
    </div>
    <Button @click="$emit('onRestart')">Reinicia</Button>
  </div>
</template>

<style>
  .results-box {
    background: #F0F0F0;
    border: 1px solid #AAAAAA;
    border-radius: 10px;
    padding: 22px 23px 19px;
    width: fit-content;

    margin-bottom: 10px;
  }

  .results-box div {
    margin-bottom: 12px;
  }

  .results-box p, h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }

  .results-box h3 {
    font-weight: bold;
  }
</style>
