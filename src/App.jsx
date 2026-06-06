import React, { useState } from 'react';
import Registration from './Registration';
import GloobalAuth from './GloobalAuth'; // This is your existing WebAuthn file

export default function App() {
  const [activeSymbolId, setActiveSymbolId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* If there is no active Symbol ID, show the Registration form */}
      {!activeSymbolId ? (
        <Registration onSymbolCreated={(newId) => setActiveSymbolId(newId)} />
      ) : (
        /* Once registered, show the biometric auth screen and pass the ID into it */
        <GloobalAuth symbolId={activeSymbolId} />
      )}
    </div>
  );
}