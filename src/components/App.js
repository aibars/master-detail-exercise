import React from 'react';
import '../styles/App.css';
import ItemsList from './ItemsList';
import SelectedItem from './SelectedItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemsList></ItemsList>
        <SelectedItem></SelectedItem>
      </header>
    </div>
  );
}

export default App;
