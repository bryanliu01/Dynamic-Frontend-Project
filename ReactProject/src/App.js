import React from 'react';
import Navigate from './components/Navigate';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
    return (
      <>
        <Router>
          <Navigate />
          <Routes>
            <Route path='/' exact />
          </Routes>
        </Router>
      </>
        
    );
}

export default App;
