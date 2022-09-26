// import { Response } from 'undici'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
  const n = url.searchParams.get('n') || 1

  return json({a: +n})
}

export async function POST({ request }) {
  const data = await request.json()
  return json({a: +data.x})
}
