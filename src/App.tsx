import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/screens/MainScreen';
import Screen404 from './components/screens/Screen404';
import Header from './components/utils/Header';
import Footer from './components/utils/Footer';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '90vh' }}>
        <Routes>
          <Route path='/' element={<MainScreen />}/>
          <Route path='/*' element={<Screen404 />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
