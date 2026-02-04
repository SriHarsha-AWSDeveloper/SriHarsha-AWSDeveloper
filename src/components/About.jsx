import React from 'react'

export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold">About</h2>
      <section className="rounded-2xl border bg-white shadow-sm">
        <div className="p-6 sm:p-8 space-y-4 text-gray-800">
          <p className="text-sm sm:text-base">
            I have around eight years of experience as a full-stack Java developer across healthcare, e-commerce, and finance domains, currently building scalable, highly available, and fault-tolerant applications in the healthcare sector. I develop responsive frontend applications and design backend services using Java and Spring Boot within a microservices architecture, building REST and GraphQL APIs, implementing business logic, and following clean, layered design principles. I have hands-on experience with both SQL and NoSQL databases, including data modeling, query optimization, and ensuring data consistency and performance, while emphasizing code quality through unit and integration testing and contributing to cloud-native development, CI/CD automation, and reliable production deployments.
          </p>
        </div>
      </section>
    </div>
  )
}
