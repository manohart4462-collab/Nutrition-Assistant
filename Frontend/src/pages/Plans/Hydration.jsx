import React, { useState } from 'react';
import { FiChevronDown, FiPlus, FiMinus } from 'react-icons/fi';
import { IoWaterOutline } from 'react-icons/io5';
import './Hydration.css';

const Hydration = () => {
  const [intake, setIntake] = useState(2100); // in ml
  const goal = 2500; // in ml
  const cupSize = 250;
  
  const cupsDrunk = Math.floor(intake / cupSize);
  const totalCups = Math.floor(goal / cupSize);
  const percentage = Math.min((intake / goal) * 100, 100);

  const handleAdd = () => setIntake(prev => Math.min(prev + cupSize, goal));
  const handleSubtract = () => setIntake(prev => Math.max(prev - cupSize, 0));

  // SVG Circle calculations
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="hyd-container">
      <div className="hyd-header">
        <div className="hyd-title-area">
          <div className="hyd-icon-blue"><IoWaterOutline size={22} color="#fff" /></div>
          <h2>Hydration</h2>
        </div>
        <div className="hyd-date-dropdown">
          <FiCalendar className="cal-icon"/> Today <FiChevronDown />
        </div>
      </div>

      <div className="hyd-card">
        <div className="hyd-circle-wrapper">
          <svg className="hyd-progress-ring" width="220" height="220">
            <circle className="hyd-ring-bg" stroke="#e0f2fe" strokeWidth="14" fill="transparent" r={radius} cx="110" cy="110" />
            <circle 
              className="hyd-ring-fill" 
              stroke="#3b82f6" 
              strokeWidth="14" 
              fill="transparent" 
              r={radius} cx="110" cy="110" 
              style={{ strokeDasharray: circumference, strokeDashoffset: strokeDashoffset }}
            />
          </svg>
          <div className="hyd-circle-text">
            <IoWaterOutline size={24} color="#3b82f6" />
            <h3>{(intake / 1000).toFixed(1)} L</h3>
            <p>of {(goal / 1000).toFixed(1)} L</p>
            <span>{Math.round(percentage)}% of daily goal</span>
          </div>
        </div>

        <div className="hyd-controls">
          <button className="ctrl-btn" onClick={handleSubtract}><FiMinus /></button>
          <span className="cup-size">250 ml</span>
          <button className="ctrl-btn" onClick={handleAdd}><FiPlus /></button>
        </div>

        <div className="hyd-divider"><span>Today's Intake</span></div>

        <div className="hyd-glasses-container">
          {[...Array(totalCups)].map((_, index) => (
            <div key={index} className="hyd-glass-wrapper">
              <div className={`hyd-glass ${index < cupsDrunk ? 'filled' : 'empty'}`}>
                <div className="water-level"></div>
              </div>
              <span className="glass-label">250 ml</span>
            </div>
          ))}
        </div>

        <div className="hyd-footer-msg">
          <strong>{cupsDrunk} of {totalCups} cups</strong>
          <p>Good job! Keep drinking water.</p>
        </div>
      </div>
    </div>
  );
};

// Mock Calendar icon for header since we didn't import it directly above
const FiCalendar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;

export default Hydration;