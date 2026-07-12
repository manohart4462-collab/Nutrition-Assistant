import React from 'react';
import { FiEdit2, FiTrash2, FiSearch, FiPlus } from 'react-icons/fi';
import './MealPlanner.css';

const MealPlanner = () => {
  const meals = [
    { id: 1, type: 'Breakfast', time: '8:00 AM', items: 'Eggs, Bread, Milk', kcal: 450, icon: '🥣', bg: '#fef6e4' },
    { id: 2, type: 'Lunch', time: '1:00 PM', items: 'Rice, Chicken Curry, Salad', kcal: 650, icon: '🍛', bg: '#e4f2fe' },
    { id: 3, type: 'Snacks', time: '4:30 PM', items: 'Apple, Almonds', kcal: 200, icon: '🍎', bg: '#fee4e4' },
    { id: 4, type: 'Dinner', time: '8:00 PM', items: 'Chapati, Dal, Vegetables', kcal: 550, icon: '🍲', bg: '#f4e4fe' },
  ];

  return (
    <div className="mp-container">
      <div className="mp-header-row">
        <div>
          <h2>My Meals</h2>
          <p>Track your daily meals and calories.</p>
        </div>
        <button className="mp-add-btn"><FiPlus /> Add Meal</button>
      </div>

      <div className="mp-search-bar">
        <FiSearch color="#888" />
        <input type="text" placeholder="Search meals..." />
      </div>

      <div className="mp-list">
        {meals.map(meal => (
          <div className="mp-card" key={meal.id}>
            <div className="mp-icon" style={{backgroundColor: meal.bg}}>{meal.icon}</div>
            <div className="mp-details">
              <h4>{meal.type}</h4>
              <span className="mp-time">{meal.time}</span>
              <p>{meal.items}</p>
            </div>
            <div className="mp-kcal"><strong>{meal.kcal}</strong> kcal</div>
            <div className="mp-actions">
              <button className="edit"><FiEdit2 /></button>
              <button className="delete"><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>

      <div className="mp-summary">
        <h3>Today's Summary</h3>
        <div className="mp-summary-grid">
          <div><span>🔥 Calories</span><strong>1850</strong> kcal</div>
          <div><span>🥩 Protein</span><strong>92</strong> g</div>
          <div><span>🌾 Carbs</span><strong>220</strong> g</div>
          <div><span>🥑 Fat</span><strong>58</strong> g</div>
          <div><span>🍽️ Meals</span><strong>4</strong> Completed</div>
        </div>
      </div>
    </div>
  );
};
export default MealPlanner;