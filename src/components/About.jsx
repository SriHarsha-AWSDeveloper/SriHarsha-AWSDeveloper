import React from 'react'

export default function About() {
  return (
    <div className="space-y-5">
      <span className="sec-label">About</span>
      <div className="panel p-6 sm:p-8 flex items-start gap-4">
        <span className="ibox mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"/></svg>
        </span>
        <div className="space-y-3" style={{ color: 'var(--text-2)' }}>
          <p className="leading-relaxed">
            Sr. Full Stack Developer experience across healthcare, e-commerce, and finance. Currently building scalable, highly available, fault-tolerant applications in the healthcare sector.
          </p>
          <p className="leading-relaxed">
            I design responsive frontends and microservice backends with Java and Spring Boot, building REST and GraphQL APIs with clean, layered architecture and strong testing practices.
          </p>
          <p className="leading-relaxed">
            Hands-on with SQL and NoSQL databases, data modeling, query optimization, CI/CD automation, and cloud-native deployments on AWS.
          </p>
        </div>
      </div>
    </div>
  )
}
