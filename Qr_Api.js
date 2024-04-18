import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const generateQRCode = () => {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
      .then((response) => response.url)
      .then((qrCodeUrl) => {
        setQrCodeUrl(qrCodeUrl);
      });
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input type="text" value={text} onChange={handleInputChange} placeholder="Enter text to encode" />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeUrl && (
        <div>
          <h2>QR Code:</h2>
          <img src={qrCodeUrl} alt="Generated QR Code" />
        </div>
      )}
    </div>
  );
}

export default App;
