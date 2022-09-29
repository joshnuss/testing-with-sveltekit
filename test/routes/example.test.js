//import { describe, test, assert } from 'vitest'
import { GET, POST } from '$routes/api/example/+server.js'
import { doSomething } from '$lib/services/example'

vi.mock('$lib/services/example')

describe('/example', () => {
  describe('GET', () => {
    test('without params', async () => {
      doSomething.mockImplementation((n) => n * 3)

      const url = new URL('/', 'http://localhost')
      const response = await GET({ url })

      expect(response.status).toBe(200)
      expect(await response.json()).toContain({ a: 3 })
    })

    test('with query', async () => {
      const url = new URL('/?n=2', 'http://localhost')
      const response = await GET({ url })

      expect(response.status).toBe(200)
      expect(await response.json()).toContain({ a: 6 })
    })
  })

  describe('POST', () => {
    test('gets response', async () => {
      const data = { x: 99 }
      const request = { json: async () => data }
      const response = await POST({ request })

      assert.equal(response.status, 200)
      assert.deepEqual(await response.json(), { a: 99 })
    })
  })
})
