import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import { Navigation } from './components/navigation/Navigation';
import Counter from './pages/counter';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to={'/counter'}/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
