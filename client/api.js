import request from 'superagent'

export function getNewMonsterImageAPI() {
  return request
    .get('/api/v1/monster')
    .then((res) => {
      console.log('monster: ', res)
      return res
    })
    .catch((err) => {
      console.error(err)
    })
}
