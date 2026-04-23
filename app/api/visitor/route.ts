import { kv } from '@vercel/kv'

// 방문 시 +1
export async function POST() {
  const count = await kv.incr('visitor_count')
  return Response.json({ count })
}

// 현재 값 조회
export async function GET() {
  const count = (await kv.get<number>('visitor_count')) || 0
  return Response.json({ count })
}