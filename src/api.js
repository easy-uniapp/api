export default class Api {
  config = {
    baseUrl: '',
    beforeRequest: async (requestOptions) => {},
    beforeResponse: async (ret) => {},
  }
  setConfig(config) {
    this.config = Object.assign(this.config, config)
  }
  async get(url, params, options) {
    return await this.request({ method: 'GET', url, params, options })
  }
  async post(url, params, options) {
    return await this.request({ method: 'POST', url, params, options })
  }
  async put(url, params, options) {
    return await this.request({ method: 'PUT', url, params, options })
  }
  async delete(url, params, options) {
    return await this.request({ method: 'DELETE', url, params, options })
  }
  async request(requestOptions) {
    requestOptions.url = this.config.baseUrl + requestOptions.url
    await this.config.beforeRequest(requestOptions)
    const [err, ret] = await uni.request(requestOptions)
    if (err) {
      throw err
    }
    return await this.config.beforeResponse(ret)
  }
}
