import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LNavbar from './components/LNavbar';

// Importing pages from the src/pages directory
import Dashboard from './pages/Plans/Dashboard';
import MealPlanner from './pages/Plans/MealPlanner';
import NutritionTracker from './pages/Plans/NutritionTracker';
import Hydration from './pages/Plans/Hydration';
import Workout from './pages/Plans/Workouts'; // Changed from Workouts to Workout based on your explorer
import Progress from './pages/Plans/Progress';
import Settings from './pages/Plans/Settings';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <LNavbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/planner" element={<MealPlanner />} />
            <Route path="/tracker" element={<NutritionTracker />} />
            <Route path="/hydration" element={<Hydration />} />
            <Route path="/workouts" element={<Workout />} /> {/* Updated component */}
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;