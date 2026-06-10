import React, { useState } from 'react';
import GloobleAccess from './GloobleAccess';
import GloobalAuth from './GloobalAuth'; // Your existing fingerprint page

export default function App() {
  const [activeSymbolId, setActiveSymbolId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Show the Custom Symbol Pad FIRST */}
      {!activeSymbolId ? (
        <GloobleAccess 
          onComplete={(newSymbolId) => setActiveSymbolId(newSymbolId)} 
        />
      ) : (
        
      /* 2. Transition to Fingerprint Scanner SECOND */
        <GloobalAuth symbolId={activeSymbolId} />
      )}

    </div>
  );
}