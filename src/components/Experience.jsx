import React from 'react'

const roles = [
  {
    company: 'The Cigna Group',
    title: 'Senior Software Engineer',
    period: 'Mar 2024 — Present',
    location: 'Irving, TX',
  },
  {
    company: 'Volkswagen',
    location: 'Rochester, Michigan',
    title: 'Sr Software Engineer',
    period: 'Nov 2021 — Feb 2024',

  },
  {
    company: 'First Horizon Bank',
    location: 'Memphis, TN',
    period: 'Jan 2020 — Oct 2021',
    title: 'Software Engineer',
  },{
    company: 'HashTag Technologies',
    location: 'Coimbatore, IN',
    period: 'Jul 2018 — Dec 2019',
    title: 'Junior Software Engineer',
  }
]

export default function Experience() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((r) => (
          <div key={r.company} className="p-5 rounded-2xl bg-white shadow-sm border">
            <div className="flex flex-col gap-1">
              <div className="font-medium text-blue-700">{r.company}</div>
              <div className="text-sm text-gray-500">{r.period}</div>
              <div className="text-gray-700">{r.title}</div>
              {r.location && <div className="text-xs text-gray-500">{r.location}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
