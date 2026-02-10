import React from 'react'

const tags = ['React', 'Spring Boot', 'AWS', 'Microservices', 'CI/CD', 'Java']
const stats = [
  { val: '8+', lbl: 'Years Exp.' },
  { val: 'Healthcare', lbl: 'Cigna Group' },
  { val: 'AWS', lbl: 'Lambda / ECS / RDS' },
  { val: 'Full-Stack', lbl: 'React + Spring' },
]

export default function Summary() {
  return (
    <div className="rounded-2xl p-6 sm:p-10 space-y-7" style={{ background: 'linear-gradient(160deg, var(--hero-from), var(--hero-to))', border: '1px solid var(--border)' }}>
      <div className="badge-green">
        <span className="badge-dot" />
        Open to opportunities
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
        Sri Harsha
        <span className="block text-lg sm:text-xl font-medium mt-1" style={{ color: 'var(--text-2)' }}>
          Senior Software Developer
        </span>
      </h1>

      <p className="max-w-2xl leading-relaxed" style={{ color: 'var(--text-2)' }}>
       Senior Software Developer with experience in scalable, highly available applications across multiple domains. Actively uses AI in daily development workflows to accelerate delivery and problem-solving.
      </p>

      {/* <div className="flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div> */}

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <a href="#contact" className="btn btn-fill">Get in touch</a>
        <a href="#experience" className="btn btn-ring">View experience</a>
      </div>

      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        {stats.map(s => (
          <div key={s.lbl} className="panel p-4 text-center">
            <div className="stat-num">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div> */}
    </div>
  )
}
