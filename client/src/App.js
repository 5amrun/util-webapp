import { useContext } from 'react';

import logo from './logo.svg';
import './App.css';
import Nav0 from './components/nav/Nav0.js';
import Sidebar0 from './components/nav/Sidebar0';
import {PageContext, PageContextProvider} from './context.js';
import PageContainer from './PageContainer';



function App() {

  const pageList = ['apps', 'layouts','navigation'];

  return (
    <div className="App">
      <Nav0 />

      <PageContextProvider defaultVal={pageList[0]} pageList={pageList}>
        <div className='appContainer'>
          
          <Sidebar0 />

          <PageContainer />

        </div>
      </PageContextProvider>

    </div>
  );
}

export default App;
