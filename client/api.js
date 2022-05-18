import request from 'superagent'

export function getNewMonsterImageAPI() {
  return request
    .get('/api/v1/monster')
    .then((data) => {
      return data.text
    })
    .catch((err) => {
      console.error(err)
    })
}
