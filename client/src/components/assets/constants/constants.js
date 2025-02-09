import ServicesComponent from "../../tabcontents/services/ServicesComponent";
import HomeComponent from "../../tabcontents/home/HomeComponent";
import CareerComponent from "../../tabcontents/careers/CareerComponent";
import AboutComponent from "../../tabcontents/about/AboutComponent";
import TrainingComponent from "../../tabcontents/training/TrainingComponent";
import ContactComponent from "../../tabcontents/contact/ContactComponent";

import about_background from "../images/about_background.png"
import services_background from "../images/services_background.png"
import training_background from "../images/training_background.png"
import contact_background from "../images/contact_background.png"
// import career_background from "../images/career_background.png"

export const tabInfo = {
    "Home": {
        component: HomeComponent,
        "key": "Home",
        "background_image": null
    },
    "About Us": {
        component: AboutComponent,
        "key": "About Us",
        "background_image": about_background
    },
    "Services": {
        component: ServicesComponent,
        "key": "Services",
        "background_image": services_background
    },
    "Training":{
        component: TrainingComponent,
        "key": "Training",
        "background_image": training_background
    },
    "Contact Us": {
        component: ContactComponent,
        "key": "Contact Us",
        "background_image": contact_background
    },
    "Careers": {
        component: CareerComponent,
        "key": "Careers",
        "background_image": null
    },
}

export const default_tab = "Home"

export const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Developing high-quality software with modern technologies.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: "Software Engineer is responsible for developing and maintaining complex software systems with a focus on scalability and performance.",
      educationalRequirements: [
        "Bachelor’s degree in Computer Science or related field.",
        "4+ years of experience in Software Engineering with a focus on backend development, API design, and performance optimization.",
        "Strong knowledge of databases like MySQL, PostgreSQL, MongoDB.",
        "Proficiency with Java, Python, and related backend technologies."
      ],
      rolesAndResponsibilities: [
        "Design, develop, and maintain scalable software systems using Java, Python, and C++.",
        "Write clean, efficient, and well-documented code following best practices.",
        "Collaborate with cross-functional teams to define requirements and technical specifications.",
        "Work with relational and NoSQL databases to ensure data integrity.",
        "Develop and maintain RESTful APIs using frameworks like Spring Boot or Django.",
        "Implement automated tests using tools like JUnit and Selenium.",
        "Optimize application performance through profiling tools like New Relic.",
        "Contribute to the CI/CD pipeline using Jenkins or GitLab CI."
      ]
    }
  },
  {
    id: 2,
    title: 'Frontend Developer',
    description: 'Creating responsive, high-performance web applications.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: "Frontend Developer builds dynamic web interfaces and ensures excellent user experience on modern platforms.",
      educationalRequirements: [
        "Bachelor’s degree in Computer Science, Web Development, or related field.",
        "4+ years of experience in frontend web development with a strong focus on React and JavaScript.",
        "Solid understanding of CSS, HTML, and modern JavaScript development practices."
      ],
      rolesAndResponsibilities: [
        "Build and maintain web applications using JavaScript, React, and Vue.js.",
        "Implement responsive designs using CSS, Sass, and Tailwind CSS.",
        "Integrate with RESTful APIs and GraphQL.",
        "Write unit and integration tests for frontend components using Jest and React Testing Library.",
        "Ensure cross-browser compatibility and resolve frontend performance issues.",
        "Collaborate with UX/UI designers to implement visual designs.",
        "Optimize frontend performance with techniques like lazy loading and code splitting.",
        "Utilize version control with Git and participate in code reviews."
      ]
    }
  },
  {
    id: 3,
    title: 'Backend Engineer',
    description: 'Building scalable backend services and APIs.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: "Backend Engineer is responsible for creating robust, scalable backend architectures for modern applications.",
      educationalRequirements: [
        "Bachelor’s degree in Computer Science, Software Engineering, or related field.",
        "4+ years of experience as a Backend Engineer with expertise in Java, Node.js, and databases.",
        "Proven ability to design scalable backend architectures and APIs."
      ],
      rolesAndResponsibilities: [
        "Design and implement backend services using Java, Spring Boot, or Node.js.",
        "Work with relational and NoSQL databases like PostgreSQL, MySQL, MongoDB, and Redis.",
        "Implement authentication and authorization using JWT or OAuth2.",
        "Write automated tests with frameworks like JUnit and Mocha.",
        "Collaborate with frontend developers and product managers.",
        "Optimize server-side performance with tools like New Relic or Datadog.",
        "Design and implement background job processing using RabbitMQ or Kafka.",
        "Ensure scalability, security, and high availability."
      ]
    }
  },
  {
    id: 4,
    title: 'Senior DevOps Engineer',
    description: 'Managing and automating infrastructure for scalable applications.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: 'Senior DevOps Engineer is responsible for managing infrastructure, automating deployments, and ensuring high availability of production systems.',
      educationalRequirements: [
        "Bachelor’s degree in Computer Science, Engineering, or related field.",
        "8+ years of experience in DevOps roles, with hands-on expertise in cloud platforms and infrastructure automation.",
        "Proficiency in tools like Docker, Kubernetes, Terraform, Jenkins, and GitLab CI."
      ],
      rolesAndResponsibilities: [
        "Design, deploy, and manage infrastructure using AWS, Azure, or Google Cloud.",
        "Automate infrastructure management using Terraform and Ansible.",
        "Implement CI/CD pipelines for automated testing and deployment.",
        "Monitor system performance using Prometheus, Grafana, and CloudWatch.",
        "Containerize applications using Docker and manage them with Kubernetes.",
        "Ensure security by implementing firewalls, encryption, and compliance measures.",
        "Troubleshoot and resolve infrastructure issues to maintain uptime.",
        "Collaborate with development teams for smoother deployments and production stability."
      ]
    }
  },
  {
    id: 5,
    title: 'Senior Full Stack Developer',
    description: 'Designing and developing both frontend and backend solutions.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: "Senior Full Stack Developer works across both frontend and backend to deliver full-stack applications.",
      educationalRequirements: [
        "Bachelor’s degree in Computer Science, Software Engineering, or related field.",
        "6+ years of experience in Full Stack Development with expertise in JavaScript, Node.js, and React.",
        "Experience in designing scalable applications using both frontend and backend technologies."
      ],
      rolesAndResponsibilities: [
        "Design and develop frontend and backend using JavaScript, Node.js, React, and MongoDB.",
        "Build and integrate RESTful APIs with backend services.",
        "Write reusable, modular code and implement unit tests with Jest and Mocha.",
        "Collaborate with design teams to implement user-friendly interfaces.",
        "Implement security best practices like JWT authentication and OAuth2.",
        "Utilize version control with Git and GitHub.",
        "Deploy and monitor applications using cloud platforms such as AWS.",
        "Ensure data integrity with both SQL (PostgreSQL) and NoSQL (MongoDB) databases."
      ]
    }
  },
  {
    id: 6,
    title: 'Senior Business Analyst',
    description: 'Analyzing and improving business processes through detailed research and collaboration.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: "Senior Business Analyst is responsible for identifying business process improvements and providing data-driven recommendations.",
      educationalRequirements: [
        "Bachelor’s degree in Business Administration, Finance, Management, or related field.",
        "6+ years of experience as a Business Analyst in the tech industry or business analysis role.",
        "Proficiency in business modeling tools like BPMN and UML.",
        "Experience with project management tools like JIRA, Confluence, and Trello."
      ],
      rolesAndResponsibilities: [
        "Analyze business processes and identify areas for improvement.",
        "Gather business requirements and ensure alignment with company goals.",
        "Develop and present business cases with cost-benefit analysis and risk assessments.",
        "Create process maps and workflows to illustrate current and desired business processes.",
        "Collaborate with cross-functional teams to translate business needs into technical solutions.",
        "Conduct gap analysis to identify missing functionalities or inefficiencies.",
        "Provide recommendations for process optimization and automation.",
        "Monitor KPIs to ensure successful delivery and implementation of business solutions."
      ]
    }
  },
  {
    id: 7,
    title: 'Senior Data Analyst',
    description: 'Leveraging data analysis to uncover actionable insights and drive business performance.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: "Senior Data Analyst is responsible for analyzing complex data sets to uncover insights and guide business decision-making.",
      educationalRequirements: [
        "Bachelor’s degree in Data Science, Statistics, Computer Science, or related field.",
        "6+ years of experience as a Data Analyst, with expertise in data visualization and statistical analysis.",
        "Proficiency in SQL, Python (Pandas, NumPy), and data visualization tools like Tableau or Power BI."
      ],
      rolesAndResponsibilities: [
        "Collect, clean, and organize data from multiple sources for analysis.",
        "Analyze large datasets using statistical techniques and data modeling.",
        "Design and implement reports and dashboards to track KPIs and metrics.",
        "Work with business teams to identify problems and recommend data-driven solutions.",
        "Create predictive models and conduct A/B testing.",
        "Collaborate with data engineers to optimize data pipelines for performance and accuracy.",
        "Monitor and assess business performance through data analysis.",
        "Provide actionable insights to senior management to guide strategic decisions."
      ]
    }
  },
  {
    id: 8,
    title: 'Engineering Manager',
    description: 'Leading and mentoring engineering teams to deliver high-quality software solutions.',
    postedDate: '01-10-2025',
    fullDescription: {
      jobDescription: "The Engineering Manager is responsible for overseeing engineering teams, guiding technical direction, and ensuring successful project delivery.",
      educationalRequirements: [
        "Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
        "10+ years of experience in software engineering with at least 3+ years in a managerial role.",
        "Proven experience leading software development teams in an Agile environment."
      ],
      rolesAndResponsibilities: [
        "Lead and manage the engineering team, setting clear goals and priorities.",
        "Collaborate with Product Management to align engineering efforts with business objectives.",
        "Oversee the software development lifecycle (SDLC), ensuring quality and timely delivery.",
        "Implement best practices in software development, code reviews, and version control.",
        "Mentor and guide engineers, fostering a productive and collaborative work culture.",
        "Conduct one-on-one meetings, performance reviews, and career development planning.",
        "Manage resource allocation and ensure projects are completed on time.",
        "Identify risks and resolve issues to prevent delays and ensure quality delivery."
      ]
    }
  },
  {
    id: 9,
    title: "QA Lead",
    description: "Leading the Quality Assurance team to ensure the delivery of high-quality software with minimal defects.",
    postedDate: "15-01-2025",
    fullDescription: {
      jobDescription: "The QA Lead is responsible for overseeing the quality assurance process, including test planning, execution, and automation. The role also includes mentoring junior QA engineers and ensuring that quality is maintained throughout the SDLC.",
      educationalRequirements: [
            "Bachelor’s degree in Computer Science, Information Technology, or a related field.",
            "5+ years of experience in quality assurance, including 2+ years in a leadership role.",
            "Strong knowledge of testing methodologies, test automation tools, and CI/CD pipelines."
        ],
        rolesAndResponsibilities: [
            "Lead and mentor the QA team, setting clear goals and objectives.",
            "Develop and execute comprehensive test plans, test cases, and scripts for software projects.",
            "Collaborate with development and product teams to define test requirements and ensure test coverage.",
            "Implement and maintain automated testing frameworks for regression and functional testing.",
            "Ensure the QA team follows best practices in test design, execution, and reporting.",
            "Monitor test results, report defects, and track quality metrics to improve product quality.",
            "Work with developers to resolve issues and ensure a smooth release process.",
            "Drive process improvements within the QA team and the software development lifecycle.",
            "Participate in hiring and training new QA team members."
        ]
    }
  },
  {
    id: 10,
    title: "Cloud Engineer",
    description: "Designing and implementing scalable cloud infrastructure to support applications and services in the cloud.",
    postedDate: "20-01-2025",
    fullDescription: {
      jobDescription: "The Cloud Engineer is responsible for designing, deploying, and managing cloud infrastructure. This includes automating cloud services, managing cloud environments, and ensuring security, performance, and cost optimization in a cloud-native environment.",
      educationalRequirements: [
            "Bachelor’s degree in Computer Science, Cloud Computing, or a related field.",
            "5+ years of experience in cloud infrastructure management with a focus on AWS, Azure, or Google Cloud.",
            "Experience with cloud automation tools like Terraform, CloudFormation, or Ansible."
        ],
        rolesAndResponsibilities: [
            "Design, implement, and manage scalable cloud infrastructure for applications and services.",
            "Collaborate with development teams to design cloud architectures that meet business needs.",
            "Automate infrastructure provisioning, configuration, and deployment using tools like Terraform and CloudFormation.",
            "Monitor cloud resources for performance, cost, and security, and optimize as needed.",
            "Ensure the security of cloud environments by following best practices and compliance standards.",
            "Implement CI/CD pipelines for cloud-based applications and ensure smooth deployments.",
            "Troubleshoot and resolve issues related to cloud infrastructure, networking, and performance.",
            "Stay updated on the latest cloud technologies, trends, and best practices, and provide recommendations for improvements.",
            "Collaborate with cross-functional teams to ensure the scalability and reliability of cloud-based systems."
        ]
    }
  }
];

export const skillsOptions = ['Java/J2EE', 'JavaScript', 'Python', 'DevOps', '.NET', 'SQL', 'AI/ML', 'Azure/AWS Cloud', 'C#','C++'];
export const designationOptions = ['Software Engineer', 'Senior Software Engineer', 'Full Stack Developer', 'Tech Lead',
   'DevOps Engineer','QA Analyst', 'QA Lead', 'Business Analyst','Architect','Cloud Engineer','Manager'];