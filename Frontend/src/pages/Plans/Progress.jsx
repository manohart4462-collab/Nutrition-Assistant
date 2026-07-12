import React from 'react';
import './Progress.css';

const Progress = () => {
  return (
    <div className="progress-wrapper">
      <header className="progress-header">
        <div className="header-titles">
          <h1>Progress</h1>
          <p>Track your journey. Celebrate every step forward.</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <span className="icon">🔍</span>
            <input type="text" placeholder="Search meals, food..." />
          </div>
          <button className="icon-btn">🔔</button>
          <img className="avatar" src="https://i.pravatar.cc/150?img=47" alt="User" />
        </div>
      </header>

      <div className="tab-group">
        <button className="tab-btn active">Weight Loss</button>
        <button className="tab-btn">Weight Gain</button>
      </div>

      {/* Top Metrics */}
      <section className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon bg-soft-green">⚖️</div>
          <div className="metric-data">
            <span className="metric-title">Current Weight</span>
            <h2>68.5 kg</h2>
            <span className="metric-subtitle text-green">↓ 2.5 kg vs last month</span>
          </div>
        </div>
        
        <div className="metric-card">
          <div className="metric-icon bg-soft-yellow">📈</div>
          <div className="metric-data">
            <span className="metric-title">Total Change</span>
            <h2>↓ 5.5 kg</h2>
            <span className="metric-subtitle">Since 1 May 2025</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon bg-soft-blue">🎯</div>
          <div className="metric-data">
            <span className="metric-title">Goal Weight</span>
            <h2>62.0 kg</h2>
            <span className="metric-subtitle">6.5 kg to go</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon bg-soft-purple">📅</div>
          <div className="metric-data">
            <span className="metric-title">Weekly Avg Change</span>
            <h2>↓ 0.6 kg / week</h2>
            <span className="metric-subtitle text-green">On track</span>
          </div>
        </div>
      </section>

      {/* Main Charts Section */}
      <section className="main-charts-grid">
        {/* Trend Chart */}
        <div className="card trend-container">
          <div className="card-top">
            <h3>Weight Trend</h3>
            <select className="simple-select"><option>Last 30 Days</option></select>
          </div>
          <div className="chart-wrapper">
            <div className="y-axis-labels">
              <span>72</span><span>70</span><span>68</span><span>66</span><span>64</span>
            </div>
            <svg viewBox="0 0 400 100" className="chart-svg green-theme">
              <defs>
                <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,20 Q50,25 100,35 T200,45 T300,55 T400,60 L400,100 L0,100 Z" fill="url(#greenGrad)" />
              <path d="M0,20 Q50,25 100,35 T200,45 T300,55 T400,60" className="stroke-line" />
              <circle cx="100" cy="35" r="3" className="point" />
              <circle cx="200" cy="45" r="3" className="point" />
              <circle cx="300" cy="55" r="3" className="point" />
              <circle cx="400" cy="60" r="4.5" className="point active" />
              <g transform="translate(355, 42)">
                <rect width="50" height="22" rx="6" fill="#22c55e" />
                <text x="25" y="15" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">68.5 kg</text>
              </g>
            </svg>
          </div>
          <div className="x-axis-labels">
            <span>May 10</span><span>May 17</span><span>May 24</span><span>May 31</span><span>Jun 7</span>
          </div>
          <div className="trend-summary">
            <div><p>Highest</p><h4>71.0 kg</h4></div>
            <div><p>Lowest</p><h4>68.2 kg</h4></div>
            <div><p>Average</p><h4>69.3 kg</h4></div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="card center-content">
          <h3 className="full-width">Weight Loss Progress</h3>
          <div className="ring-wrapper">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" className="track" />
              <circle cx="50" cy="50" r="42" className="indicator" strokeDasharray="205 264" />
            </svg>
            <div className="ring-content">
              <h2>78%</h2>
              <p>Progress to Goal</p>
            </div>
          </div>
          <p className="cheer-text">🌿 You're doing great!</p>
        </div>

        {/* Measurements List */}
        <div className="card">
          <div className="card-top">
            <h3>Body Measurements</h3>
            <select className="simple-select"><option>This Month</option></select>
          </div>
          <div className="list-items">
            <div className="list-item">
              <div className="item-label"><span className="icon-box bg-soft-blue">⚖️</span> Weight</div>
              <div className="item-value"><strong>68.5 kg</strong> <span className="text-green text-sm">↓ 2.5 kg</span></div>
            </div>
            <div className="list-item">
              <div className="item-label"><span className="icon-box bg-soft-yellow">📏</span> Waist</div>
              <div className="item-value"><strong>82 cm</strong> <span className="text-green text-sm">↓ 3 cm</span></div>
            </div>
            <div className="list-item">
              <div className="item-label"><span className="icon-box bg-soft-purple">🩳</span> Hips</div>
              <div className="item-value"><strong>98 cm</strong> <span className="text-green text-sm">↓ 2 cm</span></div>
            </div>
            <div className="list-item">
              <div className="item-label"><span className="icon-box bg-soft-green text-green">%</span> Body Fat %</div>
              <div className="item-value"><strong>24%</strong> <span className="text-green text-sm">↓ 2%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gain Overview */}
      <section className="gain-section">
        <div className="gain-details">
          <div className="gain-header">
            <h3>Weight Gain Overview</h3>
            <p>Track your progress if your goal is to gain healthy weight.</p>
          </div>
          <div className="gain-stats-row">
            <div className="big-icon">🏋️</div>
            <div className="mini-stat"><p>Current Weight</p><h4>60.5 kg</h4></div>
            <div className="mini-stat"><p>Total Change</p><h4 className="text-green">↑ 3.5 kg</h4><span>Since 1 May 2025</span></div>
            <div className="mini-stat"><p>Goal Weight</p><h4>65.0 kg</h4><span>4.5 kg to go</span></div>
            <div className="mini-stat"><p>Weekly Avg Change</p><h4 className="text-green">↑ 0.4 kg / week</h4><span className="text-green">On track</span></div>
          </div>
        </div>

        <div className="gain-chart-container">
          <div className="card-top">
            <h3>Weight Trend (Gain)</h3>
            <select className="simple-select"><option>Last 30 Days</option></select>
          </div>
          <div className="chart-wrapper mini">
             <div className="y-axis-labels"><span>64</span><span>60</span><span>56</span></div>
             <svg viewBox="0 0 300 60" className="chart-svg blue-theme">
               <defs>
                 <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                   <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                 </linearGradient>
               </defs>
               <path d="M0,50 Q40,48 80,45 T160,40 T240,35 L300,30 L300,60 L0,60 Z" fill="url(#blueGrad)" />
               <path d="M0,50 Q40,48 80,45 T160,40 T240,35 L300,30" className="stroke-line" />
               <circle cx="300" cy="30" r="4.5" className="point active" />
               <g transform="translate(260, 8)">
                 <rect width="45" height="18" rx="5" fill="#3b82f6" />
                 <text x="22.5" y="13" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">60.5 kg</text>
               </g>
             </svg>
          </div>
          <div className="x-axis-labels"><span>May 10</span><span>May 17</span><span>May 24</span><span>May 31</span><span>Jun 7</span></div>
        </div>
      </section>
    </div>
  );
};

export default Progress;