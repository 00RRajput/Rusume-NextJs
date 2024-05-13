"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DownloadApp() {
    const [deferredPrompt, setDeferredPrompt] = useState({});
    const [downloadBtn, setDownloadBtn] = useState(false);

    useEffect(() => {
        console.log("DownloadApp", window)

        window.addEventListener('beforeinstallprompt', (event) => {
            // Prevent the default behavior
            event.preventDefault();
            console.log('set', event);
            setDeferredPrompt(event);
            console.log('set event', deferredPrompt);
        });
    }, []);

    useEffect(() => {
        setDownloadBtn(true);
    }, [deferredPrompt]);

    function installPWA() {
        console.log('Enter pwaInstall',deferredPrompt);
        if (deferredPrompt) {
          // Show the install prompt
          console.log(deferredPrompt);
          deferredPrompt.prompt();
        
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
        
            // Clear the deferredPrompt variable
            // setDeferredPrompt(null);
          });
        } else {
            window.addEventListener('beforeinstallprompt', (event) => {
                // Prevent the default behavior
                event.preventDefault();

                event.prompt();
        
          // Wait for the user to respond to the prompt
          event.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
            });
        });
        }
      }

    return (
        <div>
          { downloadBtn && <button onClick={installPWA}>DownloadApp</button> }
        </div>
      );
}
