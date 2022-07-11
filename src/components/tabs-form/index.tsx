import { useContext, useEffect, useState } from "react";

import { TabsContext } from "../../context";
import { ITab } from "../../pages/tabs/types";
import Button from "../button";

import './index.css';

function TabsForm() {
  const tabsContext = useContext(TabsContext);

  const [amountError, setAmountError] = useState('');
  const [tabs, setTabs] = useState<ITab[]>(tabsContext.tabs);
  const [errors, setErrors] = useState<{ title: string, text: string }[]>(tabsContext.tabs.map(() => ({ title: '', text: '' })));

  useEffect(() => {
    let newTabs = [...tabs];
    if (tabsContext.tabsAmount > tabs.length) {
      for (let i = tabs.length; i < tabsContext.tabsAmount; i++) {
        newTabs.push({
          title: '',
          text: '',
        });
      }
      setTabs(newTabs);
    } else {
      newTabs.splice(tabsContext.tabsAmount, tabs.length - tabsContext.tabsAmount);
    }
    setTabs(newTabs);
  }, [tabsContext.tabsAmount]);

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    if (Number.isNaN(value)) return;

    const amount = Number(value);

    if (amount < 1) {
      setAmountError('Deve haver pelo menos uma aba');
      return;
    }
    
    setAmountError('');
    tabsContext.changeTabsAmount(Number(amount));
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newTabs = [...tabs];
    newTabs[index].title = value;
    setTabs(newTabs);
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newTabs = [...tabs];
    newTabs[index].text = value;
    setTabs(newTabs);
  }

  const handleSave = () => {
    const newErrors: { title: string, text: string }[] = [];
    let hasError = false;

    tabs.forEach((tab) => {
      const tabError = { title: '', text: '' };
      if (!tab.title || tab.title === '') {
        tabError.title = 'É necessário informar o titúla da aba';
        hasError = true;
      }
      if (!tab.text || tab.text === '') {
        tabError.text = 'É necessário informar o conteúdo da aba';
        hasError = true;
      }
      newErrors.push(tabError);
    });

    setErrors(newErrors);

    if (hasError) return;

    tabs.forEach((tab, index) => {
      tabsContext.changeTab(tab, index);
    });
  };


  return (
    <div className="tabs-form">
      <h1>Tabs</h1>
      <div className="input-div">
        <label>Num Tabs</label>
        <input value={tabsContext.tabsAmount} onChange={handleChangeAmount} />
      </div>
      {amountError !== '' && <div className="error">{amountError}</div>}
      <div className="line" />
      {tabsContext.tabs.map((_tab, index) => (
        <div className="tab-form" key={index}>
          <div className="input-div">
            <label>Título</label>
            <input value={tabs[index]?.title} onChange={(e) => handleChangeTitle(e, index)} />
          </div>
          {errors[index]?.title !== '' && <div className="error">{errors[index]?.title}</div>}
          <div className="input-div">
            <label>Conteúdo</label>
            <input value={tabs[index]?.text} onChange={(e) => handleChangeText(e, index)} />
          </div>
          {errors[index]?.text !== '' && <div className="error">{errors[index]?.text}</div>}
        </div>
      ))}
      <Button onClick={handleSave}>Salvar</Button>
    </div>
  )
}

export default TabsForm;
