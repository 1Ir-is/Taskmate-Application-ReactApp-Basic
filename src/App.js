import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import "./App.css";


function App() {

  const [taskList, setTasklist] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask taskList={taskList} setTasklist={setTasklist}/>
        <ShowTask taskList={taskList} setTasklist={setTasklist}/>
      </div>
    </div>
  );
}

export default App;
