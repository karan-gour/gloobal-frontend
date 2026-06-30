import React, { useState } from 'react';
import './Dashboard.css';


export default function Dashboard() {
  const [showSensitive, setShowSensitive] = useState(false);

  return (
    <div className="dash-body">
      <div className="dash-app-container">
        
        {/* --- Top Header & Search --- */}
        <div className="header-row">
          <div className="search-bar">
            <div className="globe-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <input type="text" placeholder="Search Global ID" readOnly />
            <div className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
          </div>
          
          <div className="notification-bell">
            <div className="bell-dot"></div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </div>
        </div>

        {/* --- Hero Card (Flag & Eye) --- */}
        <div className="hero-card">
          <div className="flag-wrapper">
            <div className="indian-flag">
              <div className="saffron"></div>
              <div className="white"><div className="chakra"></div></div>
              <div className="green"></div>
            </div>
          </div>
          <button className="eye-btn" onClick={() => setShowSensitive(!showSensitive)}>
            {showSensitive ? (
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>
            ) : (
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            )}
          </button>
        </div>

        {/* --- 2x2 Actions Grid --- */}
        <div className="actions-grid">
          
          <div className="action-card card-blue">
            <div className="corner-pattern pattern-blue"></div>
            <div className="circle-icon text-blue">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 4v4"/><path d="M8 4h8"/></svg>
              <div className="plus-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
            </div>
          </div>

          <div className="action-card card-green">
            <div className="corner-pattern pattern-green"></div>
            <div className="circle-icon text-green">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
            </div>
          </div>

          <div className="action-card card-purple">
            <div className="corner-pattern pattern-purple"></div>
            <div className="circle-icon text-purple">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
          </div>

          <div className="action-card card-orange">
            <div className="corner-pattern pattern-orange"></div>
            <div className="circle-icon text-orange">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10L3 14L7 18"/><path d="M21 10L17 6L13 10"/><path d="M3 14H13"/><path d="M21 10H11"/></svg>
            </div>
          </div>

        </div>

        {/* --- Bottom Navigation --- */}
        <div className="bottom-nav">
          <div className="nav-item active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <div className="active-indicator"></div>
          </div>
          <div className="nav-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h4v4H4z"></path><path d="M16 4h4v4h-4z"></path><path d="M4 16h4v4H4z"></path><path d="M16 16v.01"></path><path d="M20 16v.01"></path><path d="M16 20v.01"></path><path d="M20 20v.01"></path><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
          </div>
          <div className="nav-item">
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
