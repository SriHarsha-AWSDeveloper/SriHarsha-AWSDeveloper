import React from 'react'

const roles = [
  { company: 'The Cigna Group', title: 'Senior Software Engineer', period: 'Mar 2024 - Present', location: 'Irving, TX' },
  { company: 'Volkswagen', title: 'Sr Software Engineer', period: 'Nov 2021 - Feb 2024', location: 'Rochester, MI' },
  { company: 'First Horizon Bank', title: 'Software Engineer', period: 'Jan 2020 - Oct 2021', location: 'Memphis, TN' },
  { company: 'HashTag Technologies', title: 'Junior Software Engineer', period: 'Jul 2018 - Dec 2019', location: 'Coimbatore, IN' },
]

export default function Experience() {
  return (
    <div className="space-y-5">
      <span className="sec-label">Experience</span>
      <div className="space-y-4">
        {roles.map((r, i) => (
          <div key={r.company} className="panel panel-lift p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <div className="font-semibold" style={{ color: 'var(--accent)' }}>{r.title}</div>
                <div className="font-medium mt-0.5">{r.company}</div>
              </div>
              <div className="flex flex-col sm:items-end gap-0.5 mt-1 sm:mt-0">
                <span className="chip text-xs">{r.period}</span>
                <span className="text-xs" style={{ color: 'var(--text-3)' }}>{r.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
