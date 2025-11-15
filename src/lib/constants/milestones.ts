export type TMilestoneDate = { start: Date; end: Date | null }
export type TMilestone = {
	title: string
	role: string
	description: string
	date: TMilestoneDate
}

export const MILESTONES: TMilestone[] = [
	{
		title: 'PayPay India',
		role: 'Backend Engineer L2',
		description: `Building scalable systems and leading a high-impact lean and mean team at scale.
<ul>
  <br/>
  <li> <b>Backend Development:</b> Rapidly scaled to ownership of event-driven services handling 100M+ daily deliveries using Domain-Driven Design for rapidly evolving flexible system. Collaborated cross-functionally with other teams to architect resilient, high-performance systems from just day 60 of joining the company.</li>
  <br/>
  <li> <b>Leadership:</b> Module lead for the promotional notifications team, the architects behind every campaign. Stewarding both greenfield services and legacy systems while mentoring engineers and driving technical decisions that directly impact users and marketing teams experience.</li>
</ul>`,
		date: {
			start: new Date('2025-05-01'),
			end: null,
		},
	},
	{
		title: 'Tealfeed',
		role: 'Software Engineer 2',
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
			start: new Date('2021-09-01'),
			end: new Date('2025-04-30'),
		},
	},
	{
		title: 'Google Summer of Code',
		role: "Software Engineer Intern",
		description:
			'Worked on the open source graphics app: Inkscape. Initially thought it to primarily feature project but ended up being an <b>architectural problem</b>',
		date: {
			start: new Date('2020-05-01'),
			end: new Date('2020-07-01'),
		},
	},
	{
		title: 'Learning programming',
		role: 'Self Learner',
		description:
			'I delved into the enchanting world of programming, with C++ as my weapon of choice – a decision that proved to be the catalyst for my epic coding journey.',
		date: {
			start: new Date('2015-07-01'),
			end: null,
		},
	},
]
