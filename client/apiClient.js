import request from 'superagent'

const monsterUrl = '/api/v1/monsters' // ONly a suggestion, need to agree with backend

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}
