import React, { useState } from 'react';
import GloobalAuth from './GloobalAuth'; // Your fingerprint page

// Import your custom GLOOBLE ACCESS page here
// (Change './GloobleAccess' to the actual name of your file)
import GloobleAccess from './GloobleAccess'; 

export default function App() {
  // This state holds the 12-symbol ID once they finish registering
  const [activeSymbolId, setActiveSymbolId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. If we don't have their ID yet, show your custom Symbol Form FIRST */}
      {!activeSymbolId ? (
        <GloobleAccess 
          onComplete={(newSymbolId) => setActiveSymbolId(newSymbolId)} 
        />
      ) : (
        
      /* 2. Once the form is complete, hide it and show the Fingerprint page SECOND */
        <GloobalAuth symbolId={activeSymbolId} />
      )}

    </div>
  );
}