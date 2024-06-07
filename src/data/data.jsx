import axios from "axios";

export const API_data = async () => {
    try {
      const response = await axios.get('http://165.22.66.176:4553/api/coffee/');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};