import loadGoogleAPIPlatformLibrary from '../api/signInViaGoogleApi';
import {
  SIGN_IN_VIA_GOOGLE_BEGIN,
  SIGN_IN_VIA_GOOGLE_ERROR,
  SIGN_IN_VIA_GOOGLE_SUCCESS,
} from '../constants/signInViaGoogleConstants';

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
            resolve({ googleAuth: window.gapi.auth2.getAuthInstance() });
          },

          () => {
            reject(new Error('Could not initialize auth2.'));
          }
        );
    });
  });

const loadGoogleAPILibrary = () => async (dipatch) => {
  dipatch({ type: SIGN_IN_VIA_GOOGLE_BEGIN });

  try {
    await loadGoogleAPIPlatformLibrary();

    const res = await loadAuth2Library();

    if (res) {
      dipatch({ type: SIGN_IN_VIA_GOOGLE_SUCCESS, payload: res.googleAuth });
    }
  } catch (err) {
    dipatch({ type: SIGN_IN_VIA_GOOGLE_ERROR });
  }
};

export default loadGoogleAPILibrary;
