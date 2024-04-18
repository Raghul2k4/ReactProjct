import React, { useState } from 'react';

const QRCodeDisplay = () => {
  const [qrCodeUrl, setQRCodeUrl] = useState('');
  const [text, setText] = useState('');

  const fetchQRCode = async () => {
    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
      );
      const responseData = await response.json();
      setQRCodeUrl(responseData.image);
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    if (inputText) {
      fetchQRCode();
    } else {
      setQRCodeUrl('');
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <p>Enter the text or URL:</p>
      <input value={text} onChange={handleInputChange} />
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
};

export default QRCodeDisplay;

