import request from 'superagent'

// Returns a string for the src of the image
export function getImage() {
  // return request.get(monsterUrl)
  return Promise.resolve('Placeholder URL for Image')
}

// Returns the monster object, will replace getImage when up to it
export function getMonster() {
  return request.post('/api/v1/')
}

// Returns all monster objects in db - NOTE PLURAL!
export function getMonsters() {
  return request.get('/api/v1/collection')
}

// Function to send new monster to back end
// Just storing data in db, then redirecting
export function addNewMonster(input) {
  return request
    .post('/api/v1/add')
    .send(input)
    .then(console.log('Up to APIClient'))
}
