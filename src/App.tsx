import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LanguageSelect from './components/screens/LanguageSelectScreen';
import Screen404 from './components/screens/Screen404';
import SpeedTypingScreen from './components/screens/SpeedTypingScreen';
import Footer from './components/utils/Footer';
import Header from './components/utils/Header';
import GlobalCSS from './styles/global.css';

function App () {
  return (
    <Router>
      <GlobalCSS/>
      <Header />
      <main style={{ minHeight: '90vh' }}>
        <Routes>
          <Route path='/' element={<LanguageSelect />}/>
          <Route path='/speedtype/:language' element={<SpeedTypingScreen />}/>
          <Route path='/*' element={<Screen404 />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
