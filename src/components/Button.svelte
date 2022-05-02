<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  export let focused: boolean = false;
  export let disabled: boolean = false;

  function handleClick() {
    dispatcher("click");
  }
</script>

<button
  on:click={handleClick}
  class={focused ? "button--focused" : ""}
  {disabled}
>
  <slot />
</button>

<style>
  button {
    background: #cccccc;
    border: 1px solid #777777;
    border-radius: 3px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    min-width: 112px;

    padding: 5px 20px;

    cursor: pointer;
  }

  .button--focused {
    font-weight: 700;
    background: #aaaaaa;
  }
</style>
