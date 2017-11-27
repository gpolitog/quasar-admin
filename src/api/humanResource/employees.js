import axios from 'axios';

export default {
  async getAll() {
    try {
      return (await axios.get('/AdminEmployees')).data;
    } catch (error) {
      throw error;
    }
  },
};
