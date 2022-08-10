import React from 'react';
import './App.css';
import {Button} from "react-bootstrap"
import { EntryPage } from './pages/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';

function App() {
  return (
    <>
      <div className="App">
        {/* <EntryPage/> */}
        <DefaultLayout>
        Dashboard
        </DefaultLayout>
      </div>
    </>
  );
}

export default App;
