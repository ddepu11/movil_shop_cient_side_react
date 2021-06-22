import {
  MOBILE_CLEAR_SAVED,
  MOBILE_CREATE_BEGIN,
  MOBILE_CREATE_ERROR,
  MOBILE_CREATE_SUCCESS,
} from '../constants/mobileConstants';

const initialState = {
  mobileSaved: false,
  mobileLoading: false,
  mobileError: false,
};

const mobile = (mobileState = initialState, action) => {
  switch (action.type) {
    case MOBILE_CREATE_BEGIN:
      return { ...mobileState, mobileLoading: true };

    case MOBILE_CREATE_SUCCESS:
      return {
        ...mobileState,
        mobileLoading: false,
        mobileSaved: true,
      };

    case MOBILE_CREATE_ERROR:
      return {
        ...mobileState,
        mobileLoading: false,
        mobileError: true,
      };

    case MOBILE_CLEAR_SAVED:
      return {
        ...mobileState,
        mobileSaved: false,
      };

    default:
      return mobileState;
  }
};

export default mobile;
