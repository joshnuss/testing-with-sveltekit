import { json, error } from '@sveltejs/kit'

export async function GET({ params }) {
  if (params.id == 1) {
    throw error(404, 'Not found')
  }

  return json({id: params.id})
}
