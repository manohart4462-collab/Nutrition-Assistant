import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiCalendar, FiPieChart, FiDroplet, FiActivity, FiTrendingUp, FiSettings } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import './LNavbar.css';

const LNavbar = () => {
  const [aiText, setAiText] = useState("Ask me anything about nutrition, meals or health...");
  const location = useLocation(); // Helps identify which page is active

  const aiSuggestions = [
    "✨ Try adding a handful of spinach to your smoothie for extra iron!",
    "💡 Tip: Swap white rice with quinoa tonight for a protein boost.",
    "🥗 Suggestion: Your lunch choice was excellent! Keep it up.",
    "🏃‍♀️ Reminder: A 15-minute walk after dinner aids digestion."
  ];

  const handleAiChatClick = () => {
    const randomTip = aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)];
    setAiText(randomTip);
  };

  const navItems = [
    { name: 'Dashboard', icon: <FiHome />, path: '/' },
    { name: 'Meal Planner', icon: <FiCalendar />, path: '/planner' },
    { name: 'Nutrition Tracker', icon: <FiPieChart />, path: '/tracker' },
    { name: 'Hydration', icon: <FiDroplet />, path: '/hydration' },
    { name: 'Workouts', icon: <FiActivity />, path: '/workouts' },
    { name: 'Progress', icon: <FiTrendingUp />, path: '/progress' },
    { name: 'Settings', icon: <FiSettings />, path: '/settings' },
  ];

  return (
    <nav className="lnavbar">
      <div className="lnavbar-logo">
        <span className="logo-icon">🌱</span>
        <div className="logo-text">
          <h2>Nutri-Assist</h2>
          <p>Your Personal Nutrition Guide</p>
        </div>
      </div>

      <ul className="lnavbar-links">
        {navItems.map((item, index) => (
          <li key={index} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lnavbar-ai-card">
        <BsStars className="ai-stars" size={24} />
        <h4>Nutri-Assist AI</h4>
        <p className="ai-dynamic-text">{aiText}</p>
        <button className="ai-btn" onClick={handleAiChatClick}>Chat with AI ⌄</button>
      </div>
    </nav>
  );
};
export default LNavbar;