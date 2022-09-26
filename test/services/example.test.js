import { doSomething } from '$lib/services/example'

describe('Example', () => {
  test('doSomething', async () => {
    const result = doSomething(1)

    expect(result).toBe(2)
  })
})
