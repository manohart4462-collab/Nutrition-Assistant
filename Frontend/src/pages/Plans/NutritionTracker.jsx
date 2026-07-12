import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MdOutlineLocalFireDepartment, MdOutlineWaterDrop } from 'react-icons/md';
import { GiBowlOfRice, GiWheat } from 'react-icons/gi';
import { FiCheckCircle } from 'react-icons/fi';
import './NutritionTracker.css';

const NutritionTracker = () => {
  const pieData = [
    { name: 'Consumed', value: 1420, color: '#4caf50' },
    { name: 'Remaining', value: 580, color: '#f5f5f5' }
  ];

  return (
    <div className="nt-container">
      <div className="nt-header">
        <h2>Nutrition Tracker</h2>
        <p>Track your daily nutrition and build healthy habits.</p>
      </div>

      {/* TOP MACROS */}
      <div className="nt-top-macros">
        <div className="nt-macro-card">
          <div className="icon green-bg"><MdOutlineLocalFireDepartment /></div>
          <div className="nt-macro-details">
            <span className="title">Calories</span>
            <div className="val"><strong>1,420</strong> <span>/ 2,000 kcal</span></div>
            <div className="mini-progress"><div className="green-fill" style={{width: '71%'}}></div></div>
          </div>
          <span className="percent">71%</span>
        </div>
        <div className="nt-macro-card">
          <div className="icon blue-bg"><GiBowlOfRice /></div>
          <div className="nt-macro-details">
            <span className="title">Protein</span>
            <div className="val"><strong>78</strong> <span>/ 120 g</span></div>
            <div className="mini-progress"><div className="blue-fill" style={{width: '65%'}}></div></div>
          </div>
          <span className="percent">65%</span>
        </div>
        <div className="nt-macro-card">
          <div className="icon yellow-bg"><GiWheat /></div>
          <div className="nt-macro-details">
            <span className="title">Carbs</span>
            <div className="val"><strong>160</strong> <span>/ 240 g</span></div>
            <div className="mini-progress"><div className="yellow-fill" style={{width: '67%'}}></div></div>
          </div>
          <span className="percent">67%</span>
        </div>
        <div className="nt-macro-card">
          <div className="icon purple-bg"><MdOutlineWaterDrop /></div>
          <div className="nt-macro-details">
            <span className="title">Fats</span>
            <div className="val"><strong>45</strong> <span>/ 70 g</span></div>
            <div className="mini-progress"><div className="purple-fill" style={{width: '64%'}}></div></div>
          </div>
          <span className="percent">64%</span>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="nt-middle-grid">
        <div className="nt-card">
          <div className="nt-card-header">
            <h3>Calories Overview</h3>
            <span className="dropdown">Today ⌄</span>
          </div>
          <div className="nt-overview-content">
            <div className="nt-donut-area">
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={85} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="nt-donut-text">
                <strong>1,420</strong>
                <span>kcal<br/>Consumed</span>
              </div>
            </div>
            <div className="nt-legend">
              <div className="legend-item"><span className="dot green-dot"></span> Consumed <span className="val">1,420 kcal</span></div>
              <div className="legend-item"><span className="dot grey-dot"></span> Remaining <span className="val">580 kcal</span></div>
            </div>
          </div>
          <div className="nt-success-msg"><FiCheckCircle /> You're doing great! <br/><span>580 kcal left for your daily goal.</span></div>
        </div>

        <div className="nt-card">
          <div className="nt-card-header">
            <h3>Macronutrient Balance</h3>
            <span className="dropdown">Today ⌄</span>
          </div>
          <div className="nt-bars">
            <div className="nt-bar-item">
              <div className="nt-bar-labels"><span>Protein</span><span>78g / 120g <strong>65%</strong></span></div>
              <div className="nt-progress blue-bg"><div className="blue-fill" style={{width: '65%'}}></div></div>
            </div>
            <div className="nt-bar-item">
              <div className="nt-bar-labels"><span>Carbs</span><span>160g / 240g <strong>67%</strong></span></div>
              <div className="nt-progress yellow-bg"><div className="yellow-fill" style={{width: '67%'}}></div></div>
            </div>
            <div className="nt-bar-item">
              <div className="nt-bar-labels"><span>Fats</span><span>45g / 70g <strong>64%</strong></span></div>
              <div className="nt-progress purple-bg"><div className="purple-fill" style={{width: '64%'}}></div></div>
            </div>
            <div className="nt-bar-item">
              <div className="nt-bar-labels"><span>Fiber</span><span>18g / 25g <strong className="green-text">72%</strong></span></div>
              <div className="nt-progress green-bg"><div className="green-fill" style={{width: '72%'}}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="nt-bottom-grid">
        <div className="nt-card">
          <h3>Nutrient Highlights</h3>
          <div className="nt-highlights-grid">
            <div className="highlight-box green-light">
              <span className="hl-icon green-text">🍃</span>
              <strong>18g</strong><p>Fiber</p><span>72% of goal</span>
            </div>
            <div className="highlight-box blue-light">
              <span className="hl-icon blue-text">💧</span>
              <strong>2.1L</strong><p>Water</p><span>84% of goal</span>
            </div>
            <div className="highlight-box yellow-light">
              <span className="hl-icon yellow-text">🧊</span>
              <strong>22g</strong><p>Sugar</p><span>44% of goal</span>
            </div>
            <div className="highlight-box purple-light">
              <span className="hl-icon purple-text">⭐</span>
              <strong>90%</strong><p>Calories Goal</p><span>On Track</span>
            </div>
          </div>
        </div>

        <div className="nt-card">
          <h3>Today's Summary</h3>
          <div className="summary-list">
            <div className="summary-item">
              <div className="sum-icon green-light green-text">🍽️</div>
              <div><strong>3 Meals Logged</strong><p>Breakfast, Lunch, Dinner</p></div>
            </div>
            <div className="summary-item">
              <div className="sum-icon blue-light blue-text">💧</div>
              <div><strong>2.1 L Water</strong><p>Great job staying hydrated!</p></div>
            </div>
            <div className="summary-item">
              <div className="sum-icon yellow-light yellow-text">🎯</div>
              <div><strong>90% of Calorie Goal</strong><p>Keep it up!</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionTracker;