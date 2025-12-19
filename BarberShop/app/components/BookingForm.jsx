import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function BookingForm({ date, time }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const submit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('appointments')
      .insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        date,
        time
      })

    console.log({ data, error })
    if (error) return alert('Error: ' + error.message)

    alert('Το αίτημα στάλθηκε!')

    // reset form
    setForm({ name: '', email: '', phone: '' })
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        required
        placeholder="Όνομα"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Τηλέφωνο"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button className="bg-black text-white p-2 w-full">
        Κλείσε Ραντεβού
      </button>
    </form>
  )
}
