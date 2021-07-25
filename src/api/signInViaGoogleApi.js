const loadGoogleAPIPlatformLibrary = () =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = 'https://apis.google.com/js/platform.js';

    script.onload = () => resolve({ msg: 'loaded google library!' });

    script.onerror = () => reject(new Error('An error occured!'));

    document.body.appendChild(script);
  });

export default loadGoogleAPIPlatformLibrary;
