import React from 'react'

export default function Summary() {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="p-6 sm:p-10">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sri Harsha — Full‑Stack Java & Cloud Engineer</h1>
          <p className="text-gray-700 max-w-2xl">
            Building scalable, highly available healthcare platforms at Cigna. Frontend with React and Angular; backend with Java/Spring Boot; delivering secure, observable microservices on AWS.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">React</span>
            <span className="px-3 py-1 text-xs rounded-full bg-violet-100 text-violet-700">Spring Boot</span>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">AWS</span>
            <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">CI/CD</span>
            <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700">Microservices</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Get in touch</a>
            <a href="#experience" className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-blue-200 text-blue-700 hover:bg-blue-50">View experience</a>
          </div>
        </div>
        {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="rounded-lg bg-white/70 backdrop-blur border p-3 text-center">
            <div className="text-lg font-semibold">8+ yrs</div>
            <div className="text-gray-600">Experience</div>
          </div>
          <div className="rounded-lg bg-white/70 backdrop-blur border p-3 text-center">
            <div className="text-lg font-semibold">Healthcare</div>
            <div className="text-gray-600">Cigna</div>
          </div>
          <div className="rounded-lg bg-white/70 backdrop-blur border p-3 text-center">
            <div className="text-lg font-semibold">AWS</div>
            <div className="text-gray-600">Lambda · ECS · RDS</div>
          </div>
          <div className="rounded-lg bg-white/70 backdrop-blur border p-3 text-center">
            <div className="text-lg font-semibold">Testing</div>
            <div className="text-gray-600">JUnit · Mockito</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
