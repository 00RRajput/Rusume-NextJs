import React, { useState, useEffect } from 'react';

function App() {
  const [pwaInstalled, setPWAInstalled] = useState(false);
  const [installedApps, setInstalledApps] = useState([]);
  const [deferredPrompt, setDeferredPrompt] = useState([]);

  useEffect(() => {
    // Check if PWA is installed
    if (navigator.getInstalledRelatedApps) {
      navigator.getInstalledRelatedApps().then(apps => {
        if (apps.length > 0) {
          setPWAInstalled(true);
          setInstalledApps(apps);
        }
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      setDeferredPrompt(event)
      setPWAInstalled(true);
    });
  }, []);

  const handleInstallPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setPWAInstalled(true);
        } else {
          console.log('User dismissed the install prompt');
          setDeferredPrompt(null);
        }
      });
    }
  };

  const handleOpenApp = () => {
    // Add logic here to open the installed PWA
  };

  return (
    <div>
      {!pwaInstalled && (
        <button onClick={handleInstallPWA}>Install App</button>
      )}
      {pwaInstalled && (
        <button onClick={handleOpenApp}>Open App</button>
      )}
      {installedApps.length > 0 && (
        <div>
          <h2>Installed Apps:</h2>
          <ul>
            {installedApps.map(app => (
              <li key={app.id}>{app.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
