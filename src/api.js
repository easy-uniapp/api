export default class Api {
  constructor() {
    this.config = {
      baseUrl: '',
      beforeRequest: async (requestOptions) => {},
      beforeResponse: async (ret) => {},
    }
  }
  setConfig(config) {
    this.config = Object.assign(this.config, config)
  }
  async get(url, data, options) {
    return await this.request({ method: 'GET', url, data, options })
  }
  async post(url, data, options) {
    return await this.request({ method: 'POST', url, data, options })
  }
  async put(url, data, options) {
    return await this.request({ method: 'PUT', url, data, options })
  }
  async delete(url, data, options) {
    return await this.request({ method: 'DELETE', url, data, options })
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
