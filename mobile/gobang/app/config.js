function config() {
  let isMock = false
  return {
    entryUrl: '/',
    version: process.env.version ? process.env.version : '开发测试版',
    title: process.env.title ? process.env.title : 'Title',
    copyright: 'yhtml5.com',
    environment: [{
      name: 'development',
      host: 'localhost:9999',
      api: false
    }],
    root: {
      name: 'yhtml5',
      password: '123456'
    },
    cookie: {
      token: 'Hs6qoOHka3s78dbT',
      tokenValue: 'yqwe0OdsD',
      userName: 'srdf',
      userValue: ''
    },
    siteMap: [{
      key: '1',
      name: '五子棋',
      pathname: '/',
    }]
  }
}

export { config }
