import apisauce from 'apisauce';

export const api = apisauce.create({
  baseURL: '',
  accessToken: '',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: 50000,
});

export const getFbName = (payload) =>
  api.get(
    `https://graph.facebook.com/${payload.yourUserId}?fields=id,name,picture.type(large)&access_token=${payload.yourUserAccessToken}`,
  );

export const getNews = (payload) =>
  api.get(
    `https://rw3pqpywhg.execute-api.ap-south-1.amazonaws.com/dev/news/?page=${payload.pageNumber}&q=${payload.filter}`,
  );

export const setUserDetails = (payload) =>
  api.post(
    'https://vrip3gs3ga.execute-api.ap-south-1.amazonaws.com/dev/users/',
    payload,
  );

export const getUserDetails = (payload) =>
  api.get(
    `https://vrip3gs3ga.execute-api.ap-south-1.amazonaws.com/dev/users/?userId=${payload.userId}`,
  );
