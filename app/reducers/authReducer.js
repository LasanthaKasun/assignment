import {
  ADLAPP_FB_AUTHANTICATE,
  REQUEST,
  SUCCESS,
  ADLAPP_GET_PROFILE_DATA,
  FAILURE,
} from '../types/types';

const initialState = {
  userData: [],
  userName: [],
  profileData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADLAPP_FB_AUTHANTICATE + REQUEST:
      return {
        ...state,
        userData: action.payload,
      };
    case ADLAPP_FB_AUTHANTICATE + SUCCESS:
      return {
        ...state,
        userName: action.data,
      };
    case ADLAPP_GET_PROFILE_DATA + REQUEST:
      return {
        ...state,
        profileData: [],
      };
    case ADLAPP_GET_PROFILE_DATA + FAILURE:
      return {
        ...state,
        profileData: [],
      };
    case ADLAPP_GET_PROFILE_DATA + SUCCESS:
      return {
        ...state,
        profileData: action.data,
      };
    default:
      return state;
  }
};
