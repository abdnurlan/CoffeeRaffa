import axios from "axios";

export const API_data = async () => {
    try {
      const response = await axios.get('https://www.coffeeraffa.az/api/coffee/');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};