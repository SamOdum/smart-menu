import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './App.css';
import Nav from './components/Nav';
import MobileMenuProvider from './contexts/MobileMenuContext';

const App = () => {
  return (
    <MobileMenuProvider>
      <Nav />
    </MobileMenuProvider>
  );
};

export default App;
