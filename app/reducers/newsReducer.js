import {
  REQUEST,
  SUCCESS,
  ADLAPP_GET_NEWS,
  FAILURE,
  ADLAPP_CLEAR_NEWS,
} from '../types/types';

const initialState = {
  newsData: {
    articles: [],
    totalResults: 0,
  },
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADLAPP_GET_NEWS + REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADLAPP_GET_NEWS + FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ADLAPP_GET_NEWS + SUCCESS:
      return {
        ...state,
        newsData: {
          ...state.newsData,
          articles: [...state.newsData.articles, ...action.data.articles],
          totalResults: action.data.totalResults,
        },
        loading: false,
      };
    case ADLAPP_CLEAR_NEWS + REQUEST:
      return {
        ...state,
        newsData: {
          articles: [],
          totalResults: 0,
        },
      };
    default:
      return state;
  }
};
