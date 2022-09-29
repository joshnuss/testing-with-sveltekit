import { fetch } from 'undici'

export function doSomething(value) {
  return value * 2
}

export async function getPlayer(id) {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`).then((r) =>
    r.json()
  )

  return response
}
