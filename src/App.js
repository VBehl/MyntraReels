import React, { useState } from 'react';
import './App.css';
import myntraLogo from './myntra-logo.png'; // Import the Myntra logo

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    setUploadMessage("");
  };

  const handleUploadClick = () => {
    if (videoUrl) {
      setUploadMessage("Video uploaded successfully!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={myntraLogo} className="myntra-logo" alt="Myntra Logo" />
        <h1>MyntraReels</h1>
        <div className="profile">
          <a href="https://www.myntra.com/studio/home" target="_blank" rel="noopener noreferrer">
            <button className="myntra-button">Fashion School</button>
          </a>
          <a href="https://www.myntra.com/studio/home" target="_blank" rel="noopener noreferrer">
            <button className="myntra-button">#Share your Look</button>
          </a>
          <a href="https://www.myntra.com/studio/home" target="_blank" rel="noopener noreferrer">
            <button className="myntra-button">Product Review</button>
          </a>
        </div>
      </header>
      <div className="content">
        <div className="upload-section">
          <p>Lights, Camera, Action! Upload your reels and watch the magic unfold.</p>
          <p>Upload your reel here</p>
          <label htmlFor="file-upload" className="custom-file-upload">
            <i className="fas fa-plus"></i> Upload File
          </label>
          <input id="file-upload" type="file" onChange={handleVideoUpload} />
          {videoUrl && (
            <video width="320" height="240" controls src={videoUrl} />
          )}
          <button className="myntra-button" onClick={handleUploadClick}>Upload</button>
          {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
