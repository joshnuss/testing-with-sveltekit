//import { describe, test, assert } from 'vitest'
import { GET, POST } from '$routes/api/math/+server.js'

describe('/example', () => {
	describe('GET', () => {
		test('without params', async () => {
			const url = new URL('/', 'http://localhost')
			const response = await GET({ url })

			assert.equal(response.status, 200)
			assert.deepEqual(await response.json(), { a: 1 })
		})

		test('with query', async () => {
			const url = new URL('/?n=2', 'http://localhost')
		  const response = await GET({ url })

			assert.equal(response.status, 200)
			assert.deepEqual(await response.json(), {a: 2})
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
