import React from 'react'

const categories = [
  {
    name: 'Frontend',
    items: [
      'React',
      'Angular',
      'HTML',
      'CSS / Tailwind CSS',
      'JavaScript / TypeScript',
      'Responsive & Accessible UI',
      'SEO-friendly UIs',
      'Forms & Validation'
    ],
  },
  {
    name: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'REST & GraphQL APIs',
      'Spring MVC',
      'Spring Security',
      'Hibernate & JPA',
      'MongoDB',
      'SQL & NoSQL'
    ],
  },
  {
    name: 'DevOps',
    items: [
      'AWS: Lambda, S3, DynamoDB, RDS, EC2',
      'AWS: ECS, ECR, Step Functions',
      'Docker',
      'Kubernetes (exposure)',
      'Jenkins',
      'GitHub Actions (YAML)',
      'Terraform',
      'CI/CD Pipelines'
    ],
  },
  {
    name: 'Architectures',
    items: [
      'Microservices',
      'Scalable & Highly Available Systems',
      'Fault Tolerance',
      'Serverless Patterns'
    ],
  },
]

export default function Skills() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <section key={cat.name} className="p-5 rounded-xl bg-white border shadow-sm">
            <h3 className="font-medium text-blue-700 mb-3">{cat.name}</h3>
            <ul className="space-y-2 list-disc list-inside text-sm text-gray-800">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
