import React from 'react';

const TextInputPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'white' }}>
      <input type="text" placeholder="Saisie 1" style={{ margin: '10px', padding: '10px', width: '200px' }} />
      <input type="text" placeholder="Saisie 2" style={{ margin: '10px', padding: '10px', width: '200px' }} />
    </div>
  );
};

export default TextInputPage;
