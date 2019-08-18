export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '736278325@qq.com' // 填写qq号
    },
    get pass() {
      return '' // 授权码
    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  },
  sign: "a3c9fe0782107295ee9f1709edd15218"
}
