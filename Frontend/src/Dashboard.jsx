import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard({ symbolId, onLogout }) {
  const [showSecureId, setShowSecureId] = useState(false);
  
  // State to toggle the top bar info
  const [showTopInfo, setShowTopInfo] = useState(false);

  return (
    <div className="dash-body">
      <div className="dash-app-container">
        
        {/* --- Top Header (Tap toggle) --- */}
        <div className="header-row">
          <div className="search-bar top-toggle-btn" onClick={() => setShowTopInfo(!showTopInfo)}>
            <div className="globe-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            
            <div className="top-info-container">
              {showTopInfo ? (
                <div className="top-info-text">
                  <span className="info-id">{symbolId || 'GLB-8924'}</span>
                  <span className="info-phone">+91 98765 43210</span>
                </div>
              ) : (
                <div className="top-placeholder">Tap to view info</div>
              )}
            </div>
          </div>
          
          <div className="notification-bell">
            <div className="bell-dot"></div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </div>
        </div>

        {/* --- Hero Card (Single Eye for Secure ID) --- */}
        <div className="hero-card">
          <div className="flag-wrapper">
            <div className="indian-flag">
              <div className="saffron"></div>
              <div className="white"><div className="chakra"></div></div>
              <div className="green"></div>
            </div>
          </div>
          
          <div className="hero-details">
            <div className="detail-row">
              <div className="detail-text">
                <span className="detail-label">Secure ID</span>
                <span className="detail-value">{showSecureId ? (symbolId || 'GLB-8924') : '••••••••'}</span>
              </div>
              <button className="eye-btn-small" onClick={() => setShowSecureId(!showSecureId)}>
                {showSecureId ? (
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>
                ) : (
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- 2x2 Actions Grid --- */}
        <div className="actions-grid">
          
          {/* 1. Scanner */}
          <div className="action-card card-purple">
            <div className="corner-pattern pattern-purple"></div>
            <div className="circle-icon text-purple">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 12h16"/></svg>
            </div>
          </div>

          {/* 2. Add Bank Account */}
          <div className="action-card card-blue">
            <div className="corner-pattern pattern-blue"></div>
            <div className="circle-icon text-blue">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 4v4"/><path d="M8 4h8"/></svg>
              <div className="plus-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
            </div>
          </div>

          {/* 3. Send (Arrow) */}
          <div className="action-card card-orange">
            <div className="corner-pattern pattern-orange"></div>
            <div className="circle-icon text-orange">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </div>
          </div>

          {/* 4. Receive (Arrow) */}
          <div className="action-card card-green">
            <div className="corner-pattern pattern-green"></div>
            <div className="circle-icon text-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>
            </div>
          </div>

        </div>

        {/* --- Bottom Navigation --- */}
        <div className="bottom-nav">
          <div className="nav-item active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <div className="active-indicator"></div>
          </div>
          
          {/* PROFILE ICON - Logout */}
          <div className="nav-item" onClick={onLogout} style={{ cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          
          <div className="nav-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
        </div>

      </div>
    </div>
  );
}