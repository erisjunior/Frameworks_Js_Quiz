import { createContext, useState } from "react";
import { ITab } from "../pages/tabs/types";

interface ITabsContext {
  tabs: ITab[];
  tabsAmount: number;
  changeTab: (tab: ITab, index: number) => void;
  changeTabsAmount: (amount: number) => void;
}

export const TabsContext = createContext<ITabsContext>({
  tabs: [{ text: '', title: '' }],
  tabsAmount: 1,
  changeTab: () => {},
  changeTabsAmount: () => {},
});

export const TabsProvider: React.FC = ({ children }) => {
  const [tabsAmount, setTabsAmount] = useState(1);
  const [tabs, setTabs] = useState<ITab[]>([{ text: '', title: '' }]);

  const changeTabsAmount = (amount: number) => {
    let newTabs = [...tabs];
    if (amount > tabsAmount) {
      for (let i = tabsAmount; i < amount; i++) {
        newTabs.push({
          title: '',
          text: '',
        });
      }
      setTabs(newTabs);
    } else {
      newTabs.splice(amount, tabs.length - amount);
    }
    setTabs(newTabs);
    setTabsAmount(amount);
  }

  const changeTab = (tab: ITab, index: number) => {
    const newTabs = [...tabs];
    newTabs[index] = tab;
    setTabs(newTabs);
  }

  return (
    <TabsContext.Provider value={{ tabs, tabsAmount, changeTab, changeTabsAmount }}>
      {children}
    </TabsContext.Provider>
  )
};

