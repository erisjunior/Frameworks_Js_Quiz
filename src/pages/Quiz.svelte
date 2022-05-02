<script lang="ts">
  import questionsData from "../data/questions";
  import Question from "../components/Question.svelte";
  import Results from "../components/Results.svelte";

  let currentQuestion = 0;
  let showResults = false;
  let answers: number[] = [];

  function handleQuestionConfirm(answerIndex: number) {
    answers[currentQuestion] = answerIndex;
    currentQuestion++;

    if (currentQuestion === questionsData.length) {
      showResults = true;
    }
  }

  function handleReset() {
    currentQuestion = 0;
    showResults = false;
    answers = [];
  }
</script>

<div class="quiz-container">
  <h1>Quiz</h1>
  {#if showResults}
    <Results
      questions={questionsData}
      answersIndexes={answers}
      on:reset={() => handleReset()}
    />
  {:else}
    <Question
      questions={questionsData}
      questionIndex={currentQuestion}
      on:confirm={(e) => handleQuestionConfirm(e.detail)}
    />
  {/if}
</div>

<style>
  .quiz-container {
    width: 100%;
    height: 100%;
    margin: 40px 78px;
  }

  .quiz-container > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 10px;
  }
</style>
