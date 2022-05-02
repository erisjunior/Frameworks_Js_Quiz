<script lang="ts">
  import tabsData from "../data/tabs";
  import Button from "../components/Button.svelte";

  let currentTab = 0;
</script>

<div class="tabs-container">
  {#each tabsData as tab, index (index)}
    <Button
      focused={currentTab === index}
      on:click={() => (currentTab = index)}
    >
      {tab.title}
    </Button>
  {/each}
  <div class="tabs-box">
    {tabsData[currentTab].text}
  </div>
</div>

<style>
  .tabs-container {
    width: 100%;
    height: 100%;
    margin: 58px 52px;
  }

  .tabs-container .tabs-box {
    margin-top: 19px;
    background: #f0f0f0;
    border: 1px solid #aaaaaa;
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
