import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Development Note: Auth processing logic goes here
  };

  return (
    <div className="auth-page-container">
      {/* Top Header Navigation Bar */}
      <header className="auth-header">
        <div className="brand-logo" onClick={() => navigate('/')}>
          <span className="leaf-icon">🌿</span> Nutri-Assist
        </div>
        <div className="header-actions">
          <span className="nav-link active-link">Login</span>
          <span className="nav-link" onClick={() => navigate('/register')}>Signup</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="auth-main-content">
        <div className="login-card">
          <h2 className="auth-card-title">Welcome Back 👋</h2>
          <p className="auth-card-subtitle">Please enter your credentials to log in</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-login-submit">
              Log In
            </button>
          </form>

          <p className="auth-footer-text">
            Don't have an account? <span className="auth-redirect-link" onClick={() => navigate('/register')}>Sign up</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;