import request from 'superagent'

const monsterUrl = '/api/v1/monsters' // ONly a suggestion, need to agree with backend

//Returns a string for the src of the image
export function getImage() {
  // return request.get(monsterUrl)
  return Promise.resolve('Placeholder URL for Image')
}

//funtion to send new monster to back end
export function addNewMonster(input) {
  return request
    .post(monsterUrl)
    .send(input)
    .then((response) => response.body)
}
