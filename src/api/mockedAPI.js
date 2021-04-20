import {mockedResponse} from "./mockedResponse";

export const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedResponse);
    }, 500);
  });
};
