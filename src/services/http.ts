export const Http = {
  getHeaders: async (extraHeaders?: any) => {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return extraHeaders ? {...defaultHeaders, ...extraHeaders} : defaultHeaders;
  },

  get: async (url: string, extraHeaders?: any) => {
    try {
      const headers = await Http.getHeaders(extraHeaders);
      const response = await fetch(url)
      console.log(response, 'response')
      if (headers['Content-Type'] === 'application/json') {
        const responseData = await response.json();
        if (responseData.error || responseData.statusCode) {
          return Promise.reject(responseData);
        }
        return responseData;
      }
      return response;
    } catch (e) {
      console.log(e);
    }
  }
};
