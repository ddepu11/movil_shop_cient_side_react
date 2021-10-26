const loadAuth2Library = () =>
  new Promise((resolve, reject) => {
    window.gapi.load('auth2', async () => {
      const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

      window.gapi.auth2
        .init({
          client_id: clientId,
        })
        .then(
          () => {
            resolve(window.gapi.auth2.getAuthInstance());
          },

          () => {
            reject(new Error('Could not initialize auth2.'));
          }
        );

      // await window.gapi.auth2.getAuthInstance();
      //  window.gapi.load('signin2', () => {
      //   const params = {
      //     onsuccess: () => {
      //       console.log(GoogleAuth.currentUser.get());
      //     },
      //   };

      //   window.gapi.signin2.render('google-signin', params);
      // });
    });
  });

const loadGoogleApiLibrary = () =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = 'https://apis.google.com/js/platform.js';

    script.onload = async () => {
      const googleAuth = await loadAuth2Library();

      resolve({ googleAuth });
    };

    script.onerror = () => {
      reject(new Error('An error occured!'));
    };

    document.body.appendChild(script);
  });

export default loadGoogleApiLibrary;
