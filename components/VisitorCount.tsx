'use client'

import { useEffect, useState } from 'react'

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const visited = localStorage.getItem('visited')

    if (!visited) {
      // 처음 방문 → +1
      fetch('/api/visitor', { method: 'POST' })
        .then(res => res.json())
        .then(data => {
          setCount(data.count)
          localStorage.setItem('visited', 'true')
        })
    } else {
      // 재방문 → 조회만
      fetch('/api/visitor')
        .then(res => res.json())
        .then(data => setCount(data.count))
    }
  }, [])

  if (count === null) return null

  return (
    <p
    style={{
        textAlign: 'center',
        marginTop: '80px',
        color: '#666',
        fontSize: '0.8rem',
        letterSpacing: '0.08em',
    }}
    >
    지금까지 이 이야기를 펼쳐본 사람은 {count}명입니다
    </p>
  )
}