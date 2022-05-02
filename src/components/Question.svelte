<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Button from "./Button.svelte";
  import type { IQuestion } from "../types/Question";

  const dispatcher = createEventDispatcher();

  export let questions: IQuestion[] = [];
  export let questionIndex: number = 0;

  let currentAnswer: number | null = null;

  function setCurrentAnswer(answerIndex: number) {
    currentAnswer = answerIndex;
  }

  function handleConfirm() {
    if (!currentAnswer && currentAnswer !== 0) return;

    dispatcher("confirm", currentAnswer);
    currentAnswer = null;
  }
</script>

<div class="question-container">
  <div class="question-box">
    <p>Questão {questionIndex + 1} de {questions.length}</p>
    <h3>{questions[questionIndex].statement}</h3>
    <div>
      {#each questions[questionIndex].answers as answer, index (index)}
        <Button
          focused={currentAnswer === index}
          on:click={() => setCurrentAnswer(index)}
        >
          {answer}
        </Button>
      {/each}
    </div>
  </div>
  <Button
    disabled={!currentAnswer && currentAnswer !== 0}
    on:click={() => handleConfirm()}
  >
    Confirmar resposta
  </Button>
</div>

<style>
  .question-box {
    background: #f0f0f0;
    border: 1px solid #aaaaaa;
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
</style>
