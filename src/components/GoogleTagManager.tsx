import { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    const gtagId = import.meta.env.VITE_GA_ID;

    if (!gtagId) {
      console.warn(
        'Google Analytics ID is not provided. Set VITE_GA_ID in your .env file'
      );
      return;
    }

    // Add gtag.js script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
    document.head.appendChild(gtagScript);

    // Add gtag config script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagId}');
    `;
    document.head.appendChild(configScript);

    return () => {
      // Cleanup: remove scripts on unmount
      if (gtagScript.parentNode) {
        gtagScript.parentNode.removeChild(gtagScript);
      }
      if (configScript.parentNode) {
        configScript.parentNode.removeChild(configScript);
      }
    };
  }, []);

  return null;
};

export default GoogleTagManager;
