import {ADLAPP_GET_NEWS, REQUEST, ADLAPP_CLEAR_NEWS} from '../types/types';

export const getNewsAction = (payload) => ({
  type: ADLAPP_GET_NEWS + REQUEST,
  payload,
});

export const clearNews = () => ({
  type: ADLAPP_CLEAR_NEWS + REQUEST,
});
