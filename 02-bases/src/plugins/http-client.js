const httpClientPlugin = {
  get: async (url) => {
    let { data } = await axios.get(url);
    return data;
  },
};

module.exports = {
  http: httpClientPlugin,
};
