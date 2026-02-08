import React from 'react'

const categories = [
  { name: 'Frontend', items: ['React', 'Angular', 'HTML', 'CSS / Tailwind CSS', 'JavaScript / TypeScript', 'Responsive & Accessible UI', 'SEO-friendly UIs', 'Forms & Validation'] },
  { name: 'Backend', items: ['Java', 'Spring Boot', 'REST & GraphQL APIs', 'Spring MVC', 'Spring Security', 'Hibernate & JPA', 'MongoDB', 'SQL & NoSQL'] },
  { name: 'DevOps', items: ['AWS: Lambda, S3, DynamoDB, RDS, EC2', 'AWS: ECS, ECR, Step Functions', 'Docker', 'Kubernetes (exposure)', 'Jenkins', 'GitHub Actions (YAML)', 'Terraform', 'CI/CD Pipelines'] },
  { name: 'Architectures', items: ['Microservices', 'Scalable & Highly Available Systems', 'Fault Tolerance', 'Serverless Patterns'] },
]

export default function Skills() {
  return (
    <div className="space-y-5">
      <span className="sec-label">Skills</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map(cat => (
          <div key={cat.name} className="panel panel-lift p-5 space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--accent)' }}>{cat.name}</h3>
            <ul className="space-y-1.5">
              {cat.items.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
