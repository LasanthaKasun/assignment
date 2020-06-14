import {Toast} from 'native-base';

export const successToast = (msg = 'Success') => {
  Toast.show({
    text: msg,
    buttonText: 'Okay',
    type: 'success',
    duration: 2000,
  });
};
export const errorToast = (msg = 'Failed') => {
  Toast.show({
    text: msg,
    buttonText: 'Okay',
    type: 'danger',
    duration: 2000,
  });
};
export const infoToast = (msg = 'Success') => {
  Toast.show({
    text: msg,
    buttonText: 'Okay',
    type: 'success',
    duration: 2000,
  });
};
export const warningToast = (msg = 'Failed') => {
  Toast.show({
    text: msg,
    buttonText: 'Okay',
    type: 'warning',
    duration: 2000,
  });
};
