import {
  ADLAPP_IS_USER_LOGIN,
  ADLAPP_FB_AUTHANTICATE,
  ADLAPP_SET_PROFILE_DATA,
  ADLAPP_GET_PROFILE_DATA,
  REQUEST,
} from '../types/types';

export const isUserLoging = () => ({
  type: ADLAPP_IS_USER_LOGIN,
});

export const FBAuthnticate = (payload) => ({
  type: ADLAPP_FB_AUTHANTICATE + REQUEST,
  payload,
});

export const profileDetails = (payload) => ({
  type: ADLAPP_SET_PROFILE_DATA + REQUEST,
  payload,
});

export const getUserData = (payload) => ({
  type: ADLAPP_GET_PROFILE_DATA + REQUEST,
  payload,
});
