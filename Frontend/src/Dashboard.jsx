import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import logo from './logo.jpeg'; 

export default function Dashboard({ symbolId, userCountry = 'IN' }) {
  // 0 = Flag, 1 = Currency, 2 = Logo
  const [iconState, setIconState] = useState(0);
  
  // 'hidden', 'id', 'balance'
  const [activeView, setActiveView] = useState('hidden'); 
  
  const [greeting, setGreeting] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    const dateOptions = { day: 'numeric', month: 'short' };
    setCurrentDate(new Date().toLocaleDateString('en-GB', dateOptions));
  }, []);

  const displaySymbols = symbolId ? symbolId.split('') : ['-','-','-','-','-','-','-','-','-','-','-','-'];

  const renderInteractiveIcon = () => {
    const boxStyle = { width: '54px', height: '36px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };

    if (iconState === 0) {
      if (userCountry === 'US') {
        return (
          <div style={{ ...boxStyle, border: '1px solid #cbd5e1', flexDirection: 'column', position: 'relative' }}>
            <div style={{ flex: 1, backgroundColor: '#B22234', width: '100%' }}></div>
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', width: '100%' }}></div>
            <div style={{ flex: 1, backgroundColor: '#B22234', width: '100%' }}></div>
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', width: '100%' }}></div>
            <div style={{ flex: 1, backgroundColor: '#B22234', width: '100%' }}></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '24px', height: '18px', backgroundColor: '#3C3B6E', display: 'flex', flexWrap: 'wrap', padding: '2px', boxSizing: 'border-box' }}>
               <div style={{ color: 'white', fontSize: '5px', lineHeight: '5px', letterSpacing: '2px' }}>* * *</div>
               <div style={{ color: 'white', fontSize: '5px', lineHeight: '5px', letterSpacing: '2px', paddingLeft: '3px' }}>* *</div>
            </div>
          </div>
        );
      }
      return (
        <div style={{ ...boxStyle, border: '1px solid #cbd5e1', flexDirection: 'column' }}>
          <div style={{ flex: 1, backgroundColor: '#FF9933', width: '100%' }}></div>
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '10px', height: '10px', border: '2px solid #000080', borderRadius: '50%' }}></div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#138808', width: '100%' }}></div>
        </div>
      );
    } else if (iconState === 1) {
      return (
        <div style={{ ...boxStyle, background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '20px', fontWeight: '800' }}>
          {userCountry === 'US' ? '$' : '₹'}
        </div>
      );
    } else {
      return (
        <div style={{ ...boxStyle, background: '#ffffff', border: '1px solid #cbd5e1' }}>
          <img src={logo} alt="Gloobal" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
        </div>
      );
    }
  };

  // Toggle Button Styles
  const getBtnStyle = (isActive) => ({
    background: isActive ? '#0f172a' : '#ffffff',
    color: isActive ? '#ffffff' : '#64748b',
    border: '1px solid',
    borderColor: isActive ? '#0f172a' : '#cbd5e1',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s ease',
    boxShadow: isActive ? '0 4px 6px rgba(0,0,0,0.1)' : '0 1px 2px rgba(0,0,0,0.05)'
  });

  const MatrixIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>;
  const WalletIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>;

  return (
    <div className="dash-body">
      <div className="dash-app-container">
        <div className="dash-scroll-area">
          
          <div className="dash-header">
            <div className="dash-greeting">
              <div className="dash-rupee-icon">{userCountry === 'US' ? '$' : '₹'}</div>
              <div className="dash-user-text">
                <h2>{greeting}, Karan</h2>
                <p>{currentDate}</p>
              </div>
            </div>
            <div className="dash-header-icons">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>

          {/* --- EXACT MATCH PLAIN CARD --- */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            
            {/* TOP ROW: Flag Box (Left) & Two Icons (Right) - Dashed border removed */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              
              <div 
                onClick={() => setIconState((prev) => (prev + 1) % 3)} 
                style={{ cursor: 'pointer', transition: 'transform 0.1s' }}
              >
                {renderInteractiveIcon()}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={() => setActiveView(activeView === 'id' ? 'hidden' : 'id')}
                  style={getBtnStyle(activeView === 'id')}
                >
                  <MatrixIcon />
                </button>
                <button 
                  onClick={() => setActiveView(activeView === 'balance' ? 'hidden' : 'balance')}
                  style={getBtnStyle(activeView === 'balance')}
                >
                  <WalletIcon />
                </button>
              </div>

            </div>

            {/* BOTTOM ROW: The Shared Display Plane */}
            <div style={{ minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {activeView === 'id' && (
                <div style={{ display: 'flex', gap: '4px', width: '100%' }}>
                  {displaySymbols.slice(0, 12).map((sym, i) => (
                    <div key={i} style={{ flex: 1, height: '36px', border: '1px solid #cbd5e1', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', fontWeight: 'bold', color: '#0f172a', backgroundColor: '#ffffff', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)' }}>
                      {sym}
                    </div>
                  ))}
                </div>
              )}

              {activeView === 'balance' && (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', letterSpacing: '0.5px', lineHeight: '1' }}>
                    {userCountry === 'US' ? '$ 540.00' : '₹ 45,230.00'}
                  </div>
                  <div style={{ color: '#10b981', background: '#d1fae5', padding: '6px 10px', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold' }}>
                    ↑ +12.4%
                  </div>
                </div>
              )}

              {activeView === 'hidden' && (
                <div style={{ fontSize: '32px', color: '#cbd5e1', letterSpacing: '8px', fontWeight: 'bold' }}>
                  ••••••••
                </div>
              )}

            </div>

          </div>
          {/* --- END PLAIN CARD --- */}

          <div className="dash-actions-grid">
            <div className="dash-action-item"><div className="dash-action-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><path d="M3 14h7v7H3z"></path></svg></div></div>
            <div className="dash-action-item"><div className="dash-action-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></div></div>
            <div className="dash-action-item"><div className="dash-action-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div></div>
            <div className="dash-action-item"><div className="dash-action-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div></div>
          </div>

          <div className="dash-tx-list" style={{ marginTop: '24px' }}>
            <div className="dash-tx-item">
              <div className="dash-tx-info"><h4 style={{ margin: 0 }}>Amazon Web Services</h4></div>
              <div className="dash-tx-amount dash-tx-minus">- {userCountry === 'US' ? '$ 15.00' : '₹ 1,240.00'}</div>
            </div>
            <div className="dash-tx-item">
              <div className="dash-tx-info"><h4 style={{ margin: 0 }}>Rahul Sharma</h4></div>
              <div className="dash-tx-amount dash-tx-plus">+ {userCountry === 'US' ? '$ 6.50' : '₹ 500.00'}</div>
            </div>
            <div className="dash-tx-item">
              <div className="dash-tx-info"><h4 style={{ margin: 0 }}>Zomato</h4></div>
              <div className="dash-tx-amount dash-tx-minus">- {userCountry === 'US' ? '$ 4.20' : '₹ 325.50'}</div>
            </div>
          </div>
          
        </div>

        <div className="dash-bottom-nav">
          <div className="dash-nav-item active"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
          <div className="dash-nav-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></div>
          <div className="dash-nav-scan"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h4v4H4z"></path><path d="M16 4h4v4h-4z"></path><path d="M4 16h4v4H4z"></path><path d="M16 16v.01"></path><path d="M20 16v.01"></path><path d="M16 20v.01"></path><path d="M20 20v.01"></path><path d="M8 12h8"></path><path d="M12 8v8"></path></svg></div>
          <div className="dash-nav-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
          <div className="dash-nav-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
        </div>

      </div>
    </div>
  );
}