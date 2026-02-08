import React from 'react'

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/SriHarsha-AWSDeveloper',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.019c0 4.426 2.865 8.178 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.531 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.955 0-1.094.39-1.99 1.03-2.688-.104-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.56 9.56 0 0 1 12 7.067c.851.004 1.705.115 2.503.338 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.595 1.028 2.688 0 3.852-2.339 4.699-4.566 4.948.36.31.679.923.679 1.86 0 1.342-.012 2.423-.012 2.752 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.019C22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harsha-wmu/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.8v2.1h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V23H18v-6.67c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.51V23H7.5V8z" />
      </svg>
    ),
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@sriharsha.godavarthideveloper',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M2 6l5.5 8.5L2 18V6zm6 0l6 9 6-9h-12zm12 12h-4l4-6v6z" />
      </svg>
    ),
  },
]

export default function SocialLinks() {
  return (
    <div className="space-y-5">
      <span className="sec-label">Social</span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {links.map(l => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="panel panel-lift group flex items-center gap-4 p-5"
            aria-label={l.name}
          >
            <span className="ibox" style={{ color: 'var(--accent)' }}>{l.icon}</span>
            <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{l.name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
