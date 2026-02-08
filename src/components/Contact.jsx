import React, { useState } from 'react'

export default function Contact() {
  const CONTACT = {
    email: 'sriharsha.godavarthideveloper@gmail.com',
    phone: '+1-945-342-3862',
    location: 'United States',
  }

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handle = e => {
    e.preventDefault()
    window.location.href = `mailto:${CONTACT.email}?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
  }

  return (
    <div className="space-y-5">
      <span className="sec-label">Contact</span>
      <div className="panel overflow-hidden grid grid-cols-1 md:grid-cols-5">
        {/* Left — form */}
        <form onSubmit={handle} className="md:col-span-3 p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>Send a message</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
          </div>
          <textarea
            placeholder="Your message"
            required
            rows={4}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition resize-none"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
          />
          <button type="submit" className="btn btn-fill px-6 py-2.5 text-sm">Send message</button>
        </form>

        {/* Right — info */}
        <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-center gap-6" style={{ background: 'var(--accent-soft)' }}>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Email</p>
            <a href={`mailto:${CONTACT.email}`} className="text-sm font-medium hover:underline" style={{ color: 'var(--text)' }}>{CONTACT.email}</a>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Phone</p>
            <a href={`tel:${CONTACT.phone}`} className="text-sm font-medium hover:underline" style={{ color: 'var(--text)' }}>{CONTACT.phone}</a>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Location</p>
            <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{CONTACT.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
