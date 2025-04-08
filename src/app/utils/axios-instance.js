import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // Add any default headers here
  },
});

const fetchData = async (url, options = {}, retries = 3) => {
  try {
    // console.log('Fetching data from:', url, 'with options:', options);
    const response = await axiosInstance({
      url, 
      ...options,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      console.warn('Rate limit hit, retrying...', { retries });
      await new Promise(resolve => setTimeout(resolve, 2 ** (3 - retries) * 1000));
      return fetchData(url, options, retries - 1);
    } else {
      console.error('Error retrieving data:', error.response ? error.response.data : error.message);
      throw new Error('Could not get data');
    }
  }
};

module.exports = {fetchData};
