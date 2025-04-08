import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.watchmode.com/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // Add any default headers here
  },
});

const API_KEY = 'lOd9ycP8JmrLxX7QjBR0fPRjk1liDMwVDJY4vj9Q';

const WatchModeApi = async (method, endpoint, params={}, retries = 3) => {
  try {
    const queryParams = { apiKey: API_KEY, ...params };
    const response = await axiosInstance({
      method,
      url: endpoint, 
      ...(method === 'GET' ? { params: queryParams } : { params: { apiKey: API_KEY }, data: params }),  
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      console.warn('Rate limit hit, retrying...', { retries });
      await new Promise(resolve => setTimeout(resolve, 2 ** (3 - retries) * 1000));
      return WatchModeApi(method, endpoint, params, retries - 1);
    } else {
      console.error('Error retrieving data:', error.response ? error.response.data : error.message);
      throw new Error('Could not get data');
    }
  }
};

module.exports = {WatchModeApi};
