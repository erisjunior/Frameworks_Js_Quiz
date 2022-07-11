<script setup lang="ts">
import { reactive, ref } from 'vue';

export interface ITab {
  title: string;
  text: string;
}

const current = ref(0);
const amountError = ref('');
const tabsAmount = ref(1);
const tabs = reactive<ITab[]>([{ title: '', text: '' }]);
const errors = reactive<{ title: string, text: string }[]>([{ title: '', text: '' }]);

function setTab(index: number) {
  current.value = index;
}

function changeTabsAmount(amount: number) {
  if (amount > tabsAmount.value) {
    for (let i = tabsAmount.value; i < amount; i++) {
      tabs.push({ title: '', text: '' });
      errors.push({ title: '', text: '' });
    }
  } else {
    tabs.splice(amount, tabs.length - amount);
    errors.splice(amount, tabs.length - amount);
  }
  tabsAmount.value = amount;
}

function handleChangeAmount(value: string) {
  if (Number.isNaN(value)) return;

  const amount = Number(value);

  if (amount < 1) {
    amountError.value = 'Deve haver pelo menos uma aba';
    return;
  }
  
  amountError.value = '';
  changeTabsAmount(amount);
}

function handleChangeTitle(value: string, index: number) {
  if (!value || value === '') {
    errors[index].title = 'É necessário informar o conteúdo da aba';
    return;
  }
  tabs[index].title = value;
}

function handleChangeText(value: string, index: number) {
  if (!value || value === '') {
    errors[index].text = 'É necessário informar o conteúdo da aba';
    return;
  }
  tabs[index].text = value;
}

</script>

<template>
  <div class="container">
    <div class="tabs-form">
      <h1>Tabs</h1>
      <div class="input-div">
        <label>Num Tabs</label>
        <input :value="`${tabsAmount}`" @input="handleChangeAmount(($event.target as HTMLInputElement).value)" />
      </div>
      <div v-if="amountError !== ''" class="error">{{amountError}}</div>
      <div class="line"></div>
      <div v-for="(_tab, index) in tabs" class="tab-form" :key="index">
        <div class="input-div">
          <label>Título</label>
          <input :value="tabs[index]?.title" @input="handleChangeTitle(($event.target as HTMLInputElement).value, index)" />
        </div>
        <div v-if="errors[index]?.title !== ''" class="error">{{errors[index]?.title}}</div>
        <div class="input-div">
          <label>Conteúdo</label>
          <input :value="tabs[index]?.text" @input="handleChangeText(($event.target as HTMLInputElement).value, index)" />
        </div>
        <div v-if="errors[index]?.text !== ''" class="error">{{errors[index]?.text}}</div>
      </div>
    </div>
    <div class="tabs-list">
      <h1>Conteúdo</h1>
      <Button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setTab(index)"
        :focused="current === index"
      >
        {{ tab.title }}
      </Button>
      <div class="tabs-box">
        {{ tabs[current]?.text }}
      </div>
    </div>
  </div>
</template>

<style>
  .container {
    width: 100%;
    height: 100%;
    margin: 50px;

    display: flex;
    flex-direction: row;
  }

  .container > div {
    width: calc(50% - 150px);
    height: 100%;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.2);
  }

  .container > :first-child {
    margin-right: 25px;
  }

  .container > :last-child {
    margin-left: 25px;
  }

  .tabs-list button {
    margin-right: 22px;
  }

  .tabs-list > div {
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

  .tabs-form .line {
    border-top: 1px solid #000000;
    margin: 20px 0;
  }

  .tabs-form .input-div > label {
    margin-right: 10px;
  }

  .tabs-form .error {
    color: #ff5555;
    font-style: italic;
  }

  .tabs-form .tab-form {
    margin-bottom: 20px;
  }
</style>
