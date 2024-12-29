// src/App.jsx
import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <UserProfile />
      <h1>Counter Application</h1>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
