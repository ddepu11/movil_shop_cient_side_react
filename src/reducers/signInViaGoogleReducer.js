import {
  SIGN_IN_VIA_GOOGLE_BEGIN,
  SIGN_IN_VIA_GOOGLE_ERROR,
  SIGN_IN_VIA_GOOGLE_SUCCESS,
} from '../constants/signInViaGoogleConstants';

const initialState = {
  googleAuth: null,
  googleAuthLoading: false,
};

const signInViaGoogle = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_VIA_GOOGLE_BEGIN:
      return {
        ...state,
        googleAuthLoading: true,
      };

    case SIGN_IN_VIA_GOOGLE_SUCCESS:
      return {
        ...state,
        googleAuth: action.payload,
        googleAuthLoading: false,
      };

    case SIGN_IN_VIA_GOOGLE_ERROR:
      return {
        ...state,
        googleAuthLoading: false,
      };

    default:
      return { ...state };
  }
};

export default signInViaGoogle;
