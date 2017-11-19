import axios from 'axios';

export default {
  async login(form) {
    try {
      const res =
        await axios.post('/AdminLogin', form, {
          validateStatus: status => status < 500,
        });

      return res.status === 200;
    } catch (error) {
      throw error;
    }
  },
};
