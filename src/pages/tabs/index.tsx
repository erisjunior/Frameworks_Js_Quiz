import { useState } from 'react';
import { Button } from '../../components';

import TabsData from '../../data/tabs';

import './index.css';
import { TabsProps } from './types';

function Tabs({ tabs = TabsData }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <Button
          onClick={() => setCurrentTab(index)}
          focused={currentTab === index}
        >
          {tab.title}
        </Button>
      ))}
      <div className="tabs-box">
        {tabs[currentTab].text}
      </div>
    </div>
  );
}

export default Tabs;
