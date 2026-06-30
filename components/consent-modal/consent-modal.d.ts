declare global {
  interface Window {
    setOptiCookieConsent?: (consent: { statistics: boolean }) => void;
  }
}

export {}; // Required for the file to be treated as a module
