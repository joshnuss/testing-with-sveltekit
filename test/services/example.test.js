import { doSomething, getPlayer } from '$lib/services/example'
import { fetch } from 'undici'

vi.mock('undici')

describe('Example', () => {
  test('doSomething', async () => {
    const result = doSomething(1)

    expect(result).toBe(2)
  })

  test('getPlayer', async () => {
    fetch.mockResolvedValue({
      json: () => {
        return { id: 99, name: 'Gretzky' }
      }
    })

    const result = await getPlayer(99)
    expect(result).toContain({ id: 99, name: 'Gretzky' })
    expect(fetch).toBeCalledWith('https://statsapi.web.nhl.com/api/v1/people/99')
  })
})
