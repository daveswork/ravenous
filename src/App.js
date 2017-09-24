import React, { Component } from 'react';
import logo from './logo.svg';
import BusinessList from './components/Business/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
};

export default App;
