import { GitHubIcon, LinkedInIcon } from '@/components/icons'
// import { TelegramIcon } from '@/components/icons' // Uncomment to use Telegram
import { MailIcon } from 'lucide-react'

export const RESUME_DATA = {
	name: 'Uthrapathy M',
	initials: 'UM',
	location: 'Chennai, India',
	locationLink: 'https://www.google.com/maps/place/Chennai',
	about:
		'AWS DevOps Engineer specializing in cloud infrastructure, deployment automation, and cost optimization.',
	summary: `AWS DevOps Engineer with hands-on experience in cloud infrastructure management and deployment automation. My career began in digital marketing and social media (2017-2023), where I developed strong analytical skills and data-driven decision-making abilities, before transitioning to DevOps engineering in 2023.
	Currently, I focus on provisioning cloud infrastructure using Terraform and Ansible, deploying 3-tier applications on AWS with proper security and scalability configurations, and managing containerized workloads with Docker and Kubernetes. I work extensively with infrastructure monitoring using Prometheus, Grafana, and CloudWatch to maintain system reliability.
	A key part of my role involves cloud cost optimization - analyzing resource usage, rightsizing EC2 instances, implementing auto-scaling policies, and identifying opportunities to reduce operational expenses. My background in analytics from digital marketing helps me take a metrics-driven approach to infrastructure management.`,
	avatar: '/assets/avatar.png',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: '#'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: '#'
		},
		email: {
			name: 'Email',
			at: 'mail.uthrapathy@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+91-XXXXXXXXXX'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/uthrapathy-m',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://linkedin.com/in/uthrapathy',
				icon: LinkedInIcon
			}
			// Uncomment below to add Telegram
			// {
			// 	name: 'Telegram',
			// 	url: 'https://t.me/uthrapathym',
			// 	icon: TelegramIcon
			// }
		]
	},
	education: [
		{
			school: 'PMR Engineering College',
			degree: 'B.E Computer Science',
			start: '2012',
			end: '2016',
			percentage: '65%',
			location: 'Chennai, India',
			description: [
				'Completed Bachelor of Engineering in Computer Science with focus on software engineering fundamentals',
				'Built strong foundation in data structures, algorithms, database management, and system design',
				'Gained practical experience in programming languages including Java, Python, and C++',
				'Developed problem-solving skills and analytical thinking essential for DevOps engineering'
			]
		},
		{
			school: 'P.C.K.G Govt Hr Sec School',
			degree: 'Higher Secondary Education (12th)',
			year: '2012',
			percentage: '68%',
			location: 'Chennai, India',
			description: [
				'Completed Higher Secondary Education with focus on Science stream',
				'Studied Physics, Chemistry, Mathematics, and Computer Science'
			]
		},
		{
			school: 'P.C.K.G Govt Hr Sec School',
			degree: 'Secondary Education (10th)',
			year: '2010',
			percentage: '80%',
			location: 'Chennai, India',
			description: [
				'Completed Secondary Education with strong academic performance',
				'Developed foundational knowledge across core subjects'
			]
		}
	],
	work: [
		{
			company: 'Barrla Systems Pvt Ltd',
			location: 'Chennai, India',
			link: '#',
			badges: ['Full-time'],
			jobs: [
					{
						title: 'AWS DevOps Engineer',
						start: 'Sep, 2024',
						end: 'Present',
						description: [
							'Architected and deployed a real-time WebRTC-based telecommunication dialer application on AWS, serving 500+ concurrent users with 99.9% uptime',
							'Designed scalable infrastructure using AWS EC2, Application Load Balancer, and Auto Scaling Groups to handle dynamic call traffic, reducing latency by 40%',
							'Implemented Janus WebRTC gateway deployment with optimized TURN/STUN server configuration for reliable peer-to-peer communication across NAT networks',
							'Built automated CI/CD pipeline using GitHub Actions and AWS CodeDeploy for zero-downtime deployments, reducing deployment time from 2 hours to 15 minutes',
							'Established comprehensive monitoring solution with CloudWatch, Prometheus, and Grafana dashboards tracking WebRTC metrics (packet loss, jitter, connection quality)',
							'Optimized infrastructure costs by 30% through strategic use of Reserved Instances, S3 lifecycle policies, and rightsizing EC2 instances based on usage patterns',
							'Configured AWS RDS PostgreSQL for call metadata storage with automated backups and Multi-AZ deployment for high availability',
							'Implemented security best practices including VPC isolation, security groups, SSL/TLS encryption, and IAM roles following principle of least privilege',
							'Managed Docker containerization of application components for consistent deployments across development, staging, and production environments',
							'Created comprehensive documentation and runbooks for deployment procedures, scaling operations, and incident response protocols'
					]
				}
			]
		},
		{
			company: 'Nigazh Pvt Ltd',
			location: 'Chennai, India',
			link: '#',
			badges: ['Full-time'],
			jobs: [
					{
						title: 'Jr DevOps Engineer',
						start: 'Oct, 2023',
						end: 'Sep, 2024',
						description: [
							'Led migration of on-premises news and media infrastructure to AWS cloud, successfully transitioning 15+ applications with zero data loss and minimal downtime',
							'Conducted thorough infrastructure assessment and created detailed migration plan using AWS Migration Hub and Application Discovery Service',
							'Provisioned AWS infrastructure using Terraform, implementing multi-tier architecture with separate VPCs for production, staging, and development environments',
							'Migrated MySQL databases to AWS RDS with automated backup strategies, implementing read replicas for improved query performance on high-traffic news content',
							'Configured CloudFront CDN for media content delivery, reducing page load times by 60% and improving user experience across geographic regions',
							'Set up S3 buckets with lifecycle policies for archiving news media assets, optimizing storage costs by 45% while maintaining compliance requirements',
							'Implemented comprehensive monitoring and alerting system using CloudWatch, creating custom dashboards for tracking application performance, server health, and user traffic patterns',
							'Established automated backup and disaster recovery procedures, achieving RPO of 1 hour and RTO of 4 hours for critical news publishing systems',
							'Configured AWS Auto Scaling Groups to handle traffic spikes during breaking news events, ensuring platform stability during peak loads',
							'Documented migration procedures and created knowledge base for infrastructure management, training 5 team members on AWS best practices',
							'Reduced operational costs by 35% compared to on-premises infrastructure through strategic resource allocation and Reserved Instance purchases'
						]
					}
			]
		},
		{
			company: 'Dr R Mahendran\'s – Expovan Pvt Ltd',
			location: 'Chennai, India',
			link: '#',
			badges: ['Full-time'],
			jobs: [
				{
					title: 'Digital Marketing Executive',
					start: 'Jun, 2022',
					end: 'Sep, 2023',
					description: [
						'Managed digital marketing campaigns across Google Ads, Facebook Ads, and Instagram',
						'Analyzed campaign performance using Google Analytics and social media insights',
						'Optimized marketing strategies based on ROI analysis and audience engagement metrics',
						'Created content calendars and coordinated with design teams for creative assets',
						'Managed SEO optimization and monitored website traffic and conversion rates'
					]
				}
			]
		},
		{
			company: 'Meinigar Media Private Ltd',
			location: 'Chennai, India',
			link: '#',
			badges: ['Full-time'],
			jobs: [
				{
					title: 'Digital Marketing Executive',
					start: 'Aug, 2021',
					end: 'Feb, 2022',
					description: [
						'Executed digital marketing strategies across social media platforms and email campaigns',
						'Coordinated with creative teams for content development and brand messaging',
						'Monitored campaign performance and provided weekly reports on key metrics',
						'Managed social media accounts and engaged with online communities'
					]
				}
			]
		},
		{
			company: 'RKFI & MNM',
			location: 'Chennai, India',
			link: '#',
			badges: ['Full-time'],
			jobs: [
				{
					title: 'Social Media Manager',
					start: 'Apr, 2018',
					end: 'Jul, 2021',
					description: [
						'Managed social media accounts across Facebook, Twitter, Instagram, and LinkedIn',
						'Developed content strategies and maintained consistent brand voice across platforms',
						'Analyzed social metrics using native analytics tools and third-party platforms',
						'Coordinated influencer partnerships and user-generated content campaigns',
						'Grew follower base through organic and paid social media strategies'
					]
				}
			]
		},
		{
			company: 'Hashtag Media Pvt Ltd',
			location: 'Chennai, India',
			link: '#',
			badges: ['Full-time'],
			jobs: [
				{
					title: 'Social Media Analyst',
					start: 'Jan, 2017',
					end: 'Mar, 2018',
					description: [
						'Analyzed social media trends and audience engagement metrics across platforms',
						'Provided data-driven insights for social media strategy improvements',
						'Created performance reports tracking reach, engagement, and conversion metrics',
						'Monitored competitor activities and industry trends for strategic recommendations'
					]
				}
			]
		}
	],
	skills: [
		// DevOps & Cloud
		'AWS (EC2, S3, RDS, VPC, ELB, CloudWatch)',
		'Azure',
		'Docker',
		'Kubernetes',
		'Terraform',
		'Ansible',
		'Jenkins',
		'GitHub Actions',
		'Prometheus',
		'Grafana',
		'Linux Administration',
		'Bash Scripting',
		'Python',
		'Git',
		'CI/CD Pipelines',
		'Infrastructure as Code',
		'Cost Optimization',

		// Digital Marketing (Previous Experience)
		'Google Ads',
		'Facebook Ads Manager',
		'Google Analytics',
		'SEO',
		'Social Media Marketing',
		'Content Strategy',
		'Email Marketing',
		'Canva',
		'Hootsuite',
		'Buffer'
	],
	projects: [
		// Add your DevOps and infrastructure projects here
		// Example format:
		{
			title: 'AWS 3-Tier Application Deployment',
			techStack: [
				'AWS',
				'Terraform',
				'Docker',
				'Kubernetes',
				'Jenkins',
				'Prometheus',
				'Grafana'
			],
			description:
				'Deployed and managed a scalable 3-tier application on AWS using infrastructure as code. Implemented automated CI/CD pipelines and comprehensive monitoring.',
			link: {
				label: 'github.com/uthrapathym/project-name',
				href: 'https://github.com/uthrapathym/project-name'
			}
		},
		{
			title: 'Infrastructure Cost Optimization',
			techStack: [
				'AWS',
				'Terraform',
				'Python',
				'CloudWatch'
			],
			description:
				'Analyzed and optimized cloud infrastructure costs through resource rightsizing, auto-scaling policies, and usage analysis.',
			link: {
				label: 'github.com/uthrapathym/project-name',
				href: 'https://github.com/uthrapathym/project-name'
			}
		},
		{
			title: 'Kubernetes Monitoring Stack',
			techStack: [
				'Kubernetes',
				'Prometheus',
				'Grafana',
				'Helm',
				'Docker'
			],
			description:
				'Set up comprehensive monitoring and alerting system for Kubernetes clusters using Prometheus and Grafana with custom dashboards.',
			link: {
				label: 'github.com/uthrapathym/project-name',
				href: 'https://github.com/uthrapathym/project-name'
			}
		}
		// Add more projects as needed
	]
}
