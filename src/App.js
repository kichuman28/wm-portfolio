// App.js or index.js
import React from 'react';
import './components/style.css';
import Career from './components/career';
import MyComponent from './components/home_screen';
import MobileApp from './components/mobileapp';
import Software from './components/software';
import Schedule from './components/scheduleconvo';
import Voip from './components/voip';
import AI from './components/ai';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/career" element={<Career />} />
          <Route path="/mobile" element={<MobileApp />} />
          <Route path="/software" element={<Software />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/voip" element={<Voip />} />
          <Route path="/ai" element={<AI />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
