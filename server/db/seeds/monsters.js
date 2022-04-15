/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('monsters').del()
  await knex('monsters').insert([
    {
      id: 1,
      image: 'imageUrl1',
      name: 'Godzilla',
      description: `A real tough guy`,
      health: 10,
      damage: 12,
      capture_date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      image: 'imageUrl2',
      name: 'Gremlin',
      description: `We can all relate to this charming little gremlin`,
      health: 5,
      damage: 10,
      capture_date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      image: 'imageUrl3',
      name: 'Werewolf',
      description: `He's a werewolf AND a swearwolf!`,
      health: 7,
      damage: 15,
      capture_date: new Date().toLocaleDateString(),
    },
  ])
}
