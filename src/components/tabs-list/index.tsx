import { useContext, useState } from 'react';

import { TabsContext } from '../../context';
import Button from '../button';

import './index.css';

function TabsList() {
  const tabsContext = useContext(TabsContext);

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="tabs-list">
      <h1>Conteúdo</h1>
      {tabsContext.tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => setCurrentTab(index)}
          focused={currentTab === index}
        >
          {tab.title}
        </Button>
      ))}
      <div>
        {tabsContext.tabs[currentTab]?.text}
      </div>
    </div>
  )
}

export default TabsList;
