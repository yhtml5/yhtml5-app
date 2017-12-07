export default function actionCreator(type = '') {
  if (Object.prototype.toString.call(type) !== '[object String]') {
    console.error('action type must be a string')
    throw 'action type must be a string'
    return
  }
  return (payload = {}) => {
    if (Object.prototype.toString.call(payload) !== '[object Object]') {
      throw 'action payload must be a object'
    } else {
      return {
        type,
        payload,
      }
    }
  }
}
