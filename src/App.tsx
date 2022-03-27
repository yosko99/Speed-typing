import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App () {
  return (
    <Router>
      <main style={{ minHeight: '90vh' }}>
        <Routes>
          <Route path='/' element={<h1>hello</h1>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
