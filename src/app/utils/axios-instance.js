import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosApi = async (url, options = {}, retries = 3) => {
  try {
    const response = await axiosInstance({
      url,
      ...options,
    });
    
    return response;
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      console.warn('Rate limit hit, retrying...', { retries });
      await new Promise(resolve => setTimeout(resolve, 2 ** (3 - retries) * 1000));
      return axiosApi(url, options, retries - 1);
    } else {
      console.error('Error retrieving data:', error.response ? error.response.data : error.message);
      throw new Error('Could not get data');
    }
  }
};

// Add method helpers
axiosApi.get = (url, config = {}) => axiosApi(url, { method: 'GET', ...config });
axiosApi.post = (url, data = {}, config = {}) => axiosApi(url, { method: 'POST', data, ...config });
axiosApi.put = (url, data = {}, config = {}) => axiosApi(url, { method: 'PUT', data, ...config });
axiosApi.delete = (url, config = {}) => axiosApi(url, { method: 'DELETE', ...config });

module.exports = { axiosApi };
