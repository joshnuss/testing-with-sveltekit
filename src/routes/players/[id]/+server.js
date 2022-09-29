import { json, error } from '@sveltejs/kit'
import { getPlayer } from '$lib/services/example'

export async function GET({ params }) {
  const player = await getPlayer(params.id)

  if (!player) {
    throw error(404, 'Not found')
  }

  return json(player)
}
