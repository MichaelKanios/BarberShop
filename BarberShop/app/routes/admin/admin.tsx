import { useState, useEffect } from 'react'
// @ts-ignore
import { supabase } from '../../lib/supabase'
// @ts-ignore
import AdminLogin from '../../components/AdminLogin'

// ----------- Εδώ βάζεις τον τύπο Appointment ------------
type Appointment = {
  id: number
  name: string
  email: string
  date: string
  time: string
  status: 'pending' | 'approved' | 'rejected'
}
// ----------------------------------------------------------

export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [appointments, setAppointments] = useState<Appointment[]>([]) // εδώ χρησιμοποιούμε τον τύπο

  // Fetch appointments
  const fetchAppointments = async () => {
    const { data } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })
    setAppointments(data)
  }

  useEffect(() => {
    if (auth) fetchAppointments()
  }, [auth])

  const handleApprove = async (id:number, date:string, time:string) => {
    await supabase
      .from('appointments')
      .update({ status: 'approved' })
      .eq('id', id)

    await supabase
      .from('availability')
      .update({ is_available: false })
      .eq('date', date)
      .eq('time', time)

    alert('Approved! Email should be sent here.')
    fetchAppointments()
  }

  const handleReject = async (id:number) => {
    await supabase
      .from('appointments')
      .update({ status: 'rejected' })
      .eq('id', id)

    alert('Rejected! Email should be sent here.')
    fetchAppointments()
  }

  if (!auth) return <AdminLogin onSuccess={() => setAuth(true)} />

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <table className="w-full border-collapse border border-slate-300">
        <thead>
          <tr className="bg-slate-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app.id} className="text-center">
              <td className="border p-2">{app.name}</td>
              <td className="border p-2">{app.email}</td>
              <td className="border p-2">{app.date}</td>
              <td className="border p-2">{app.time}</td>
              <td className="border p-2">{app.status}</td>
              <td className="border p-2 space-x-2">
                {app.status === 'pending' && (
                  <>
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      onClick={() =>
                        handleApprove(app.id, app.date, app.time)
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleReject(app.id)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
