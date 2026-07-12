import React from 'react';
import { FiArrowLeft, FiClock, FiBarChart2, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import { BiDumbbell } from 'react-icons/bi';
import './Workouts.css';

const Workouts = () => {
  const exercises = [
    { id: 1, name: 'Squats', reps: '3 sets × 12 reps', time: '00:45', icon: '🏋️' },
    { id: 2, name: 'Push-ups', reps: '3 sets × 15 reps', time: '00:45', icon: '🤸' },
    { id: 3, name: 'Dumbbell Rows', reps: '3 sets × 12 reps', time: '00:45', icon: '💪' },
    { id: 4, name: 'Plank', reps: '3 sets × 45 sec', time: '00:45', icon: '🧘' },
    { id: 5, name: 'Lunges', reps: '3 sets × 12 reps (each leg)', time: '00:45', icon: '🏃' },
    { id: 6, name: 'Bicep Curls', reps: '3 sets × 15 reps', time: '00:45', icon: '🏋️‍♂️' },
  ];

  return (
    <div className="wo-container">
      <div className="wo-header-nav">
        <FiArrowLeft className="back-icon" />
        <h2>Workouts</h2>
      </div>

      <div className="wo-hero-card">
        <div className="wo-hero-icon green-bg">
          <BiDumbbell size={32} />
        </div>
        <div className="wo-hero-info">
          <h3>Full Body Strength</h3>
          <p>Build strength. Stay consistent. Feel stronger every day.</p>
          <div className="wo-hero-meta">
            <span><FiClock /> 45 min</span>
            <span className="divider">|</span>
            <span><FiBarChart2 /> Moderate</span>
          </div>
        </div>
      </div>

      <div className="wo-plan-section">
        <h4>Workout Plan</h4>
        <div className="wo-list">
          {exercises.map((ex, index) => (
            <div className="wo-list-item" key={ex.id}>
              <div className="wo-ex-left">
                <div className="wo-ex-image">{ex.icon}</div>
                <div className="wo-ex-details">
                  <strong>{index + 1}. {ex.name}</strong>
                  <span>{ex.reps}</span>
                </div>
              </div>
              <div className="wo-ex-right">
                <div className="wo-time-badge">{ex.time}</div>
                <FiChevronRight className="chevron" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="wo-success-msg">
          <FiCheckCircle className="check-icon" />
          <span>Great job! Consistency is the key to strength.</span>
        </div>
      </div>
    </div>
  );
};

export default Workouts;