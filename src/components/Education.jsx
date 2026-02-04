import React from 'react'

const schools = [
  {
    name: 'State University',
    degree: 'B.Tech in Computer Science',
    period: '2017 — 2021',
  }
]

export default function Education() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold">Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {schools.map((s) => (
          <div key={s.name} className="p-5 rounded-2xl bg-white shadow-sm border">
            <div className="font-medium text-blue-700">{s.degree}</div>
            <div className="text-gray-700">{s.name}</div>
            <div className="text-sm text-gray-500">{s.period}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
