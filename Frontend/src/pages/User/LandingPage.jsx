import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      {/* Centered Modal Card Container */}
      <div className="welcome-card">
        {/* Apple Logo Icon representation */}
        <div className="logo-container">
          <svg className="apple-logo" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,22 9.09,22.05C7.81,22.1 6.81,20.78 5.96,19.56C4.23,17.07 2.91,12.5 4.69,9.43C5.57,7.9 7.15,6.94 8.85,6.91C10.14,6.88 11.36,7.78 12.16,7.78C12.96,7.78 14.43,6.7 15.96,6.85C16.6,6.88 18.4,7.11 19.56,8.8C19.47,8.85 17.37,10.07 17.39,12.53C17.41,15.42 19.83,16.38 19.86,16.4C19.84,16.46 19.46,17.76 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z"/>
          </svg>
        </div>

        <h1 className="welcome-title">
          Welcome to <span className="highlight-text">Nutri-Assist</span>
        </h1>
        
        <p className="welcome-subtitle">
          Your personalized nutrition planner. Get expert diet suggestions based on your age, weight, goals and more!
        </p>

        {/* Dynamic App Feature Badges */}
        <div className="features-row">
          <div className="feature-item">
            <span className="icon green-icon">✚</span> Healthy Diets
          </div>
          <div className="feature-item">
            <span className="icon pink-icon">⤢</span> Fitness Tracking
          </div>
          <div className="feature-item">
            <span className="icon red-icon">🍴</span> Meal Planning
          </div>
        </div>

        {/* Action Form Directing Gateways */}
        <div className="buttons-row">
          <button className="btn btn-login" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="btn btn-signup" onClick={() => navigate('/register')}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;