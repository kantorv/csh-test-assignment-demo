import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarTemplate from './components/playground/sidebar-tpl'

function App() {
 // console.log("App started")
  return (
    <div className="App">
      <header className="App-header">
        <SidebarTemplate />
      </header>
    </div>
  );
}

export default App;
