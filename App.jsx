import React, { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold animate-float-up">Merhaba, ben Aylin Erkut</h1>
        <p className="max-w-2xl text-lg animate-float-up mt-4">Frontend Developer — React & Tailwind ile modern tek sayfa portfolio.</p>
        <button onClick={() => setDark(!dark)} className="mt-6 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">{dark ? 'Light' : 'Dark'}</button>
      </div>
    </div>
  )
}