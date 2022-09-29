import { db } from '$lib/services/db'
import players from '$lib/services/players'

describe('Players', () => {
  beforeAll(async () => {
    await db.$executeRaw`truncate table "Player"`
  })

  test('all', async () => {
    await db.player.create({
      data: {
        name: "Wayne Gretzky",
        position: "Center"
      }
    })
    const result = await players.all()

    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Wayne Gretzky')
    expect(result[0].position).toBe('Center')
  })

  describe('create', async () => {
    test('without errors', async () => {
      const result = await players.create({
        name: 'Wayne Gretzky',
        position: 'Center'
      })

      expect(result.success).toBeTruthy()
      expect(result.data.name).toBe('Wayne Gretzky')
      expect(result.data.position).toBe('Center')
    })

    test('without name', async () => {
      const result = await players.create({
        position: 'Center'
      })

      expect(result.success).toBeFalsy()
      expect(result.errors.name).toContain({ required: true })
    })

    test('without position', async () => {
      const result = await players.create({
        name: 'Gretzky',
      })

      expect(result.success).toBeFalsy()
      expect(result.errors.position).toContain({ required: true })
    })
  })
})
