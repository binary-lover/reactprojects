import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Accordion from './components/accordion';
import List from './components/list';

const App = () => {
  return (
    <div className="App">
      <List/>
    </div>
  );
};

export default App;
