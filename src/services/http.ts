export const Http = {
  getHeaders: async (extraHeaders?: any) => {
    const userToken = ''
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    };

    return extraHeaders ? {...defaultHeaders, ...extraHeaders} : defaultHeaders;
  },

  get: async (url: string, extraHeaders?: any) => {
    try {
      const headers = await Http.getHeaders(extraHeaders);
      const response = await fetch(url, {
        method: 'GET',
        headers,
      });
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
