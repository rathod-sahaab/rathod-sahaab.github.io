export type TMilestoneDate = string | { start: string; end: string }
export type TMilestone = {
	title: string
	description: string
	date: TMilestoneDate
}

export const MILESTONES: TMilestone[] = [
	{
		title: 'Tealfeed',
		description: `Designing distributed systems, architecting microservices, and managing end-to-end infrastructure on AWS with Kubernetes and Terraform.
<ul>
  <br/>
  <li> <b>Backend Development:</b> From building complex payment gateways and SSO systems to architecting ABAC-based access management, I love solving hard backend problems using Go, Node.js, NestJS, PostgreSQL, MongoDB, Redis, RabbitMQ, and Kafka.</li>
  <br/>
  <li> <b>DevOps & Infra:</b> I lead and maintain production-grade DevOps pipelines, working with AWS, Kubernetes, CI/CD, GitOps, Docker, and Terraform, ensuring high availability and compliance with ISO 27001:2022, HIPAA, and SOC2 standards.</li>
  <br/>
  <li> <b>Leadership & Mentorship:</b> As a founding backend engineer, I’ve led migrations from monolith to microservices, mentored junior engineers, and driven key architectural decisions that reduced system latency by 92% (3000ms to 240ms).</li>
</ul>`,
		date: {
			start: 'September 2021',
			end: 'Present',
		},
	},
	{
		title: 'Google Summer of Code',
		description:
			'Worked on the open source graphics app: Inkscape. Initially thought it to primarily feature project but ended up being an <b>architectural problem</b>',
		date: {
			start: 'May 2020',
			end: 'July 2020',
		},
	},
	{
		title: 'Started programming',
		description:
			'I delved into the enchanting world of programming, with C++ as my weapon of choice – a decision that proved to be the catalyst for my epic coding journey.',
		date: 'July 2015',
	},
]
