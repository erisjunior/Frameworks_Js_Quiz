import { TabsProvider } from './context';
import * as Pages from './pages';

function App() {
  return (
    <TabsProvider>
      <Pages.Tabs />
    </TabsProvider>
  );
};

export default App;
