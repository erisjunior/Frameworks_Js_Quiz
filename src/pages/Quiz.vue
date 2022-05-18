<script setup lang="ts">
  import { reactive, ref, computed } from 'vue';
  import Question from '../components/Question.vue';
  import Results from '../components/Results.vue';
  import questionsData from '../data/questions';

  const current = ref(0);

  const answers = reactive<number[]>([]);

  const showQuestions = computed(() => current.value < questionsData.length);

  function setAnswer(index: number) {
    answers.push(index);
    current.value++;
  }

  function reset() {
    answers.splice(0, answers.length);
    current.value = 0;
  }
</script>

<template>
  <div class="quiz-container">
    <h1>Quiz</h1>
    <Question
      v-if="showQuestions"
      :questions="questionsData"
      :currentIndex="current"
      @onSelect="setAnswer"
    />
    <Results v-else :questions="questionsData" :answersIndexes="answers" @onRestart="reset" />
  </div>
</template>

<style>
  .quiz-container {
    padding: 40px 78px;
  }

  .quiz-container > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 10px;
  }
</style>
