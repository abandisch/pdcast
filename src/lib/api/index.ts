import {MOCK_PODCAST} from './mockdata';

const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });

export const getPodcast = (url: string) => {
  return delay(1000).then(() => ({
    data: {podcast: MOCK_PODCAST},
  }));
};
