import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiSearch, FiBell, FiEdit2, FiCheckCircle, FiCircle } from 'react-icons/fi';
import { MdOutlineLocalFireDepartment, MdOutlineWaterDrop } from 'react-icons/md';
import { GiBowlOfRice, GiWheat } from 'react-icons/gi';
import './Dashboard.css';

const Dashboard = () => {
  // Data for Charts
  const pieData = [
    { name: 'Protein', value: 78, color: '#2196f3' },
    { name: 'Carbs', value: 160, color: '#ffc107' },
    { name: 'Fats', value: 45, color: '#9c27b0' },
    { name: 'Others', value: 137, color: '#4caf50' }
  ];

  const lineData = [
    { name: 'Mon', kcal: 1200 }, { name: 'Tue', kcal: 1500 },
    { name: 'Wed', kcal: 1900 }, { name: 'Thu', kcal: 1400 },
    { name: 'Fri', kcal: 1700 }, { name: 'Sat', kcal: 1420 },
    { name: 'Sun', kcal: 1600 }
  ];

  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <h1>Good morning, Seema! 👋</h1>
          <p>Here's your nutrition explorer for today.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <FiSearch color="#888" />
            <input type="text" placeholder="Search food, meals..." />
          </div>
          <button className="notification-btn"><FiBell /></button>
          <div className="profile-pic">
            <img src="https://i.pravatar.cc/150?img=47" alt="Profile" />
          </div>
        </div>
      </header>

      {/* TOP ROW: MACROS */}
      <div className="grid-row top-macros">
        <div className="card macro-card">
          <div className="macro-icon-bg green-bg"><MdOutlineLocalFireDepartment color="#4caf50" size={20}/></div>
          <div className="macro-header">Calories</div>
          <div className="macro-value">1,420 <span>/ 2,000 kcal</span></div>
          <div className="progress-bar green"><div style={{width: '71%'}}></div></div>
        </div>
        <div className="card macro-card">
          <div className="macro-icon-bg blue-bg"><GiBowlOfRice color="#2196f3" size={20}/></div>
          <div className="macro-header">Protein</div>
          <div className="macro-value">78 <span>/ 120 g</span></div>
          <div className="progress-bar blue"><div style={{width: '65%'}}></div></div>
        </div>
        <div className="card macro-card">
          <div className="macro-icon-bg yellow-bg"><GiWheat color="#ffc107" size={20}/></div>
          <div className="macro-header">Carbs</div>
          <div className="macro-value">160 <span>/ 240 g</span></div>
          <div className="progress-bar yellow"><div style={{width: '67%'}}></div></div>
        </div>
        <div className="card macro-card">
          <div className="macro-icon-bg purple-bg"><MdOutlineWaterDrop color="#9c27b0" size={20}/></div>
          <div className="macro-header">Fats</div>
          <div className="macro-value">45 <span>/ 70 g</span></div>
          <div className="progress-bar purple"><div style={{width: '64%'}}></div></div>
        </div>
      </div>

      {/* MIDDLE ROW: CHARTS & GOALS */}
      <div className="grid-row middle-charts">
        <div className="card">
          <div className="card-header-flex">
            <h3>Nutrition Overview</h3>
            <span className="dropdown-text">Today ⌄</span>
          </div>
          <div className="pie-chart-container">
            <div className="pie-wrapper">
                <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                    <Pie data={pieData} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value">
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
                <div className="pie-center-text">
                    <strong>1,420</strong>
                    <span>kcal</span>
                </div>
            </div>
            <div className="pie-legend">
                {pieData.map(item => (
                    <div className="legend-item" key={item.name}>
                        <span className="dot" style={{backgroundColor: item.color}}></span>
                        <span className="name">{item.name}</span>
                        <span className="value">{item.value}g</span>
                    </div>
                ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header-flex">
            <h3>Calorie Intake Trend</h3>
            <span className="dropdown-text">This Week ⌄</span>
          </div>
          <div className="line-chart-container">
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                <Tooltip />
                <Line type="monotone" dataKey="kcal" stroke="#4caf50" strokeWidth={3} dot={{r: 4, fill: '#4caf50'}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header-flex">
            <h3>Today's Goals</h3>
            <span className="edit-link">Edit</span>
          </div>
          <div className="goals-list">
            <div className="goal-item">
              <span className="goal-icon green-bg"><MdOutlineLocalFireDepartment color="#4caf50"/></span>
              <div className="goal-info">
                  <div className="goal-title">Calories <span>2,000 kcal</span></div>
                  <div className="progress-bar green"><div style={{width: '71%'}}></div></div>
              </div>
            </div>
            <div className="goal-item">
              <span className="goal-icon blue-bg"><GiBowlOfRice color="#2196f3"/></span>
              <div className="goal-info">
                  <div className="goal-title">Protein <span>120 g</span></div>
                  <div className="progress-bar blue"><div style={{width: '65%'}}></div></div>
              </div>
            </div>
            <div className="goal-item">
              <span className="goal-icon cyan-bg"><MdOutlineWaterDrop color="#00bcd4"/></span>
              <div className="goal-info">
                  <div className="goal-title">Water <span>2.5 L</span></div>
                  <div className="progress-bar cyan"><div style={{width: '84%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: MEALS & BALANCE */}
      <div className="grid-row bottom-details">
        <div className="card">
          <h3>Today's Meals</h3>
          <div className="meals-list">
            <div className="meal-item">
              <div className="meal-img">🥣</div>
              <div className="meal-details">
                <span className="meal-time">Breakfast</span>
                <h4>Oats with Fruits</h4>
                <p>450 kcal</p>
              </div>
              <FiCheckCircle color="#4caf50" size={20} />
            </div>
            <div className="meal-item">
              <div className="meal-img">🥗</div>
              <div className="meal-details">
                <span className="meal-time">Lunch</span>
                <h4>Grilled Chicken Salad</h4>
                <p>520 kcal</p>
              </div>
              <FiCheckCircle color="#4caf50" size={20} />
            </div>
            <div className="meal-item">
              <div className="meal-img">🥜</div>
              <div className="meal-details">
                <span className="meal-time">Snack</span>
                <h4>Greek Yogurt with Nuts</h4>
                <p>200 kcal</p>
              </div>
              <FiCircle color="#ddd" size={20} />
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Nutrient Balance</h3>
          <div className="nutrient-balance-list">
             <div className="nutrient-item">
                 <div className="nutrient-labels"><span>Protein</span><span>78g / 120g</span></div>
                 <div className="progress-bar blue"><div style={{width: '65%'}}></div></div>
             </div>
             <div className="nutrient-item">
                 <div className="nutrient-labels"><span>Carbs</span><span>160g / 240g</span></div>
                 <div className="progress-bar yellow"><div style={{width: '67%'}}></div></div>
             </div>
             <div className="nutrient-item">
                 <div className="nutrient-labels"><span>Fats</span><span>45g / 70g</span></div>
                 <div className="progress-bar purple"><div style={{width: '64%'}}></div></div>
             </div>
             <div className="nutrient-item">
                 <div className="nutrient-labels"><span>Fiber</span><span>18g / 25g</span></div>
                 <div className="progress-bar green"><div style={{width: '72%'}}></div></div>
             </div>
          </div>
        </div>

        <div className="grid-column right-stack">
          <div className="card hydration-card text-center">
            <h3>Hydration</h3>
            <div className="hydration-circle">
               <div className="hydro-inner">
                   <MdOutlineWaterDrop color="#2196f3" size={24}/>
                   <h2>2.1 L</h2>
                   <p>of 2.5 L</p>
               </div>
            </div>
            <p className="hydro-msg">Great job! Keep drinking water.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;