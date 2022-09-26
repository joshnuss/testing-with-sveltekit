import { GET } from '$routes/players/[id]/+server.js'
import { getPlayer } from '$lib/services/example'

vi.mock('$lib/services/example', () => {
	return {
		getPlayer: vi.fn()
	}
})

describe('GET', () => {
	test('returns 404 when nothing found', async () => {
		getPlayer.mockResolvedValue(null)

		const params = { id: 1 }

		await expect(GET({ params }))
			.rejects
			.toContain({ status: 404 })
	})

	test('returns 200 when id is not 1', async () => {
		getPlayer.mockImplementationOnce(async (id) => {
			expect(id).toBe(99)
			return { id: 99, name: "Josh" }
		})

		const params = { id: 99 }
		const response = await GET({ params })

		expect(response.status).toBe(200)
		expect(await response.json()).toContain({id: 99})
	})
})
