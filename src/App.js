// App.js or index.js
import React from 'react';
import './components/style.css';
import Career from './components/career';
import MyComponent from './components/home_screen';
import MobileApp from './components/slider/mobileapp';
import Software from './components/slider/software';
import Schedule from './components/scheduleconvo';
import Voip from './components/slider/voip';
import AI from './components/slider/ai';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/wm-portfolio" element={<MyComponent />} />
          <Route path="/wm-portfolio/career" element={<Career />} />
          <Route path="/wm-portfolio/mobile" element={<MobileApp />} />
          <Route path="/wm-portfolio/software" element={<Software />} />
          <Route path="/wm-portfolio/schedule" element={<Schedule />} />
          <Route path="/wm-portfolio/voip" element={<Voip />} />
          <Route path="/wm-portfolio/ai" element={<AI />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
