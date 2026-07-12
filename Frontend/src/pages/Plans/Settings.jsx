import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>Settings</h1>
        <p>Manage your preferences and account settings.</p>
      </header>

      <div className="settings-grid">
        {/* Row 1: Profile & Notifications */}
        <section className="card">
          <h4>Profile Settings</h4>
          <div className="profile-info">
            <div className="avatar">AS</div>
            <div><h5>Ananya Sharma</h5><p>ananya@email.com</p></div>
          </div>
          {['Date of Birth', 'Height', 'Weight', 'Goal', 'Gender'].map(item => (
            <div className="setting-row" key={item}><span>{item}</span><span className="arrow">&gt;</span></div>
          ))}
        </section>

        <section className="card">
          <h4>Notifications</h4>
          {['Meal Reminders', 'Hydration Reminders', 'Workout Reminders', 'Progress Updates'].map(notif => (
            <div className="setting-row" key={notif}><span>{notif}</span><div className="toggle active"></div></div>
          ))}
        </section>

        {/* Row 2: Account & Logout */}
        <section className="card">
          <h4>Account & Privacy</h4>
          {['Change Password', 'Privacy Policy'].map(acc => (
            <div className="setting-row" key={acc}><span>{acc}</span><span className="arrow">&gt;</span></div>
          ))}
        </section>

        <section className="card">
          <h4>About</h4>
          <p>Nutri-Assist Version 1.0.0</p>
          <button className="logout-btn">Log Out &gt;</button>
        </section>
      </div>
    </div>
  );
};

export default Settings;