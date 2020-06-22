import React from 'react';
import logo from './logo.svg';
import './App.css';
import BTNav from './BaiTapLayoutComponent/BTNav';
import BTContainer from './BaiTapLayoutComponent/BTContainer';
import BTFooter from './BaiTapLayoutComponent/BTFooter';

function App() {
  return (
    <div className="App">
      <BTNav/>
      <BTContainer/>
      <BTFooter/>
    </div>
  );
}

export default App;
