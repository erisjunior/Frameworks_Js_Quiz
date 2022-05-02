<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Button from "./Button.svelte";
  import type { IQuestion } from "../types/Question";

  const dispatcher = createEventDispatcher();

  export let questions: IQuestion[] = [];
  export let answersIndexes: number[] = [];

  function handleReset() {
    dispatcher("reset");
  }
</script>

<div>
  <div class="results-box">
    {#each questions as question, index (index)}
      <div>
        <h3>Questão {index + 1}</h3>
        <p>{question.statement}: {question.answers[answersIndexes[index]]}</p>
      </div>
    {/each}
  </div>
  <Button on:click={() => handleReset()}>Reinicia</Button>
</div>

<style>
  .results-box {
    background: #f0f0f0;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    padding: 22px 23px 19px;
    width: fit-content;

    margin-bottom: 10px;
  }

  .results-box div {
    margin-bottom: 12px;
  }

  .results-box p,
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }

  .results-box h3 {
    font-weight: bold;
  }
</style>
