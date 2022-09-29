import { json } from '@sveltejs/kit'
import { db } from '$lib/services/db'

export async function GET() {
  const players = await db.player.findMany()
  return json(players)
}
