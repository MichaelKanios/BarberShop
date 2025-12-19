import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function BookingSection() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [slots, setSlots] = useState([])
  const [form, setForm] = useState({
    name: '',
    email: '',        // ← νέο πεδίο email
    phone: '',
    branch: '',
    message: ''
  })

  // Fetch available slots για τη συγκεκριμένη ημερομηνία
  useEffect(() => {
    if (!date) return
    supabase
      .from('availability')
      .select('*')
      .eq('date', date)
      .eq('is_available', true)
      .then(({ data }) => setSlots(data || []))
  }, [date])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!time) return alert('Please select a time slot')

    await supabase.from('appointments').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      date,
      time,
      branch: form.branch,
      message: form.message
    })

    alert('Το αίτημα στάλθηκε!')

    // reset form
    setForm({
      name: '',
      email: '',
      phone: '',
      branch: '',
      message: ''
    })
    setDate('')
    setTime('')
    setSlots([])
  }

  return (
    <section className="booking-section section-padding" id="booking-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
            <form onSubmit={handleSubmit} className="custom-form booking-form" role="form">
              <div className="text-center mb-5">
                <h2 className="mb-1">Book a seat</h2>
                <p>Please fill out the form and we get back to you</p>
              </div>

              <div className="booking-form-body">
                <div className="row">
                  <div className="col-lg-6 col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                    <input
  type="tel"
  className="form-control"
  placeholder="Mobile 6944444444"
  value={form.phone}
  onChange={(e) => setForm({ ...form, phone: e.target.value })}
  pattern="[0-9]{10}"   // ← 10 ψηφία χωρίς παύλες
  required
/>
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                    <select
                      className="form-select form-control"
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      required
                    >
                      <option value="">Select Branches</option>
                      <option value="Grünberger">Grünberger</option>
                      <option value="Behrenstraße">Behrenstraße</option>
                      <option value="Weinbergsweg">Weinbergsweg</option>
                    </select>
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                    <select
                      className="form-select form-control"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="">Select Time</option>
                      {slots.map(slot => (
                        <option key={slot.id} value={slot.time}>
                          {slot.time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Comment (Optional)"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="col-lg-4 col-md-10 col-8 mx-auto">
                  <button type="submit" className="form-control">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
