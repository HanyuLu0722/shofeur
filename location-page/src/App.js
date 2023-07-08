import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationPage from './LocationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LocationPage />} />
      </Routes>
    </Router>
  );
};

export default App;

