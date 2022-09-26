import { GET } from '$routes/products/[id]/+server.js'

describe('GET', () => {
	test('returns 404 when id is 1', async () => {
		const params = { id: 1 }

		await expect(GET({ params }))
			.rejects
			.toContain({ status: 404 })
	})

	test('returns 200 when id is not 1', async () => {
		const params = { id: 99 }
		const response = await GET({ params })

		expect(response.status).toBe(200)
		expect(await response.json()).toContain({id: 99})
	})
})
