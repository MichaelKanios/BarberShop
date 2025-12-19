import { useState } from 'react'

export default function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState('')

  const submit = () => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      onSuccess()
    } else {
      alert('Λάθος κωδικός!')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="password"
        placeholder="Admin password"
        className="border p-2 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={submit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  )
}
