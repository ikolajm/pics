import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8c950fb8b51f1f0470a72f7c9e7231ebc3850776045893d25214cbae8cba81ea'
  }
});
