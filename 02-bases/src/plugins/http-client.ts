import axios from "axios";

const httpClientPlugin = {
  get: async (url: string) => {
    let { data } = await axios.get(url);
    return data;
  },
};

export { httpClientPlugin as http };
