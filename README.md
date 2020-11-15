# Welcome to @easy-uniapp/api 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/easy-uniapp/api#readme)

> Easy Uni-App Api

### 🏠 [Homepage](https://github.com/easy-uniapp/api#readme)

## Install

```sh
# yarn
yarn add @easy-uniapp/api

# npm
npm install @easy-uniapp/api --save
```

## Usage

```javascript
import api from '@easy-uniapp/api'

const api = new Api()

const isDev = process.env.NODE_ENV === 'development'

const baseUrl = isDev ? '[developmentServer]' : '[productServer]'

api.setConfig({
  baseUrl,
  beforeRequest: async (requestOptions) => {
    // do something...
  },
  beforeResponse: async (ret) => {
    // do something...
  },
})

export default api
```

## Author

👤 **godtail <i@tech.top>**

- Github: [@easy-uniapp](https://github.com/easy-uniapp)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/easy-uniapp/api/issues). You can also take a look at the [contributing guide](https://github.com/easy-uniapp/api/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [godtail <i@tech.top>](https://github.com/easy-uniapp).

This project is [MIT](https://github.com/easy-uniapp/api/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
