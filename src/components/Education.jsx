import React from 'react'

const schools = [
  { degree: 'M.S. in Computer Science', school: 'Western Michigan University, Kalamazoo' },
  { degree: 'B.Tech in Computer Science', school: 'Sathyabama University, Chennai' },
]

export default function Education() {
  return (
    <div className="space-y-5">
      <span className="sec-label">Education</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {schools.map(s => (
          <div key={s.school} className="panel panel-lift p-5 flex items-start gap-4">
            <span className="ibox text-lg">🎓</span>
            <div>
              <p className="font-semibold" style={{ color: 'var(--accent)' }}>{s.degree}</p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-2)' }}>{s.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
