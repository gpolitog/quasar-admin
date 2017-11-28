import axios from 'axios';

export default {
  async getData() {
    try {
      return (await axios.get('/AdminEmployees')).data;
    } catch (error) {
      throw error;
    }
  },
};
