'use client'
import { Suspense } from 'react'

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">404 - Stránka nenájdená</h1>
        <p>Ospravedlňujeme sa, požadovaná stránka neexistuje.</p>
      </div>
    </Suspense>
  )
} 