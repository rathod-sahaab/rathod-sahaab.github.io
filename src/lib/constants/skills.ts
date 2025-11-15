import { type IFilterTag } from "$lib/types/filter-tags";

export type ISkill = {
  name: string,
  description: string,
  aspects: readonly {
    name: string,
    description: string,
  }[],
  certifications?: readonly {
    issuer: string,
    certification: string,
    link: string,
  }[],
}

export const SKILLS = {
  languages: [
    {
      name: 'Java',
      description: 'Enterprise-grade language with strong typing, object-oriented design, and JVM ecosystem.',
      aspects: [
        {
          name: 'Collections and Generics',
          description: 'Working with data structures and type-safe collections',
        },
        {
          name: 'Concurrency and Multithreading',
          description: 'Threads, synchronization, and concurrent programming',
        },
        {
          name: 'Memory Management and JVM Internals',
          description: 'Garbage collection, memory allocation, and JVM architecture',
        },
        {
          name: 'Core Language Features',
          description: 'Classes, interfaces, inheritance, polymorphism, exception handling',
        },
      ],
    },
    {
      name: 'Kotlin',
      description: 'Modern JVM language combining object-oriented and functional programming paradigms.',
      aspects: [
        {
          name: 'Functional Programming',
          description: 'Lambda expressions, higher-order functions, and functional data structures',
        },
        {
          name: 'Type magic',
          description: 'Sealed classes, data classes, and type inference with Arrow.kt types for safer programming',
        },
        {
          name: 'Coroutines',
          description: 'Lightweight concurrency with async/await patterns',
        },
        {
          name: 'No exceptions programming',
          description: 'Rust and Go like type safe error handling, Using Either and Option types from Arrow.kt for error handling without exceptions, and compile-time error safety',
        }
      ],
    },
    {
      name: 'Rust',
      description: 'Systems programming language providing memory safety without garbage collection and blazing performance.',
      aspects: [
        {
          name: 'Ownership and Borrowing',
          description: 'Memory management through ownership rules, borrowing, and lifetimes ensuring memory safety',
        },
        {
          name: 'Error Handling with Result and Option',
          description: 'Type-safe error handling without exceptions, composable error propagation patterns',
        },
        {
          name: 'Traits and Generic Programming',
          description: 'Advanced trait system, trait bounds, and generic abstractions for code reuse',
        },
        {
          name: 'Concurrency and Async/Await',
          description: 'Safe concurrency primitives, async runtime, channels, and data race prevention',
        },
      ],
    },
    {
      name: 'C++',
      description: 'Mother tounge, the first programming language I learned and still love.',
      aspects: [
        {
          name: 'Standard Template Library',
          description: 'Standard Template Library',
        },
        {
          name: 'C++17',
          description: 'ISO standard of C++17 and previous',
        },
        {
          name: 'Object Oriented Programming',
          description: 'Object Oriented Programming',
        },
      ],
      certifications: [
        {
          issuer: 'LinkedIn',
          certification: 'Top 5%',
          link: 'https://www.linkedin.com/in/rathod-sahaab/skills/report/C%2B%2B',
        },
        {
          issuer: 'HackerRank',
          certification: 'C++(Basic)',
          link: 'https://www.hackerrank.com/certificates/ee0741479896',
        },
      ],
    },
    {
      name: 'JavaScript',
      description: 'Fast(enough), omnipresent, and fun; some gripes though...',
      aspects: [
        {
          name: 'Event loop',
          description: 'The event loop JS engines use to be non-blocking',
        },
        {
          name: 'Asynchronus programming',
          description: 'asycn/await and promises',
        },
        {
          name: 'ES6+',
          description: 'The recent additions to ECMA Script 2015',
        },
      ],
      certifications: [
        {
          issuer: 'CutShort',
          certification: 'JavaScript: Advanced',
          link: 'https://cutshort.io/certificate/52587',
        },
      ],
    },
    {
      name: 'TypeScript',
      description: 'The reason I write so many web apps, great language',
      aspects: [
        {
          name: 'Advanced Type System',
          description: 'Generics, conditional types, mapped types, utility types, and type inference',
        },
        {
          name: 'Decorators and Metaprogramming',
          description: 'Reflection, decorators for classes/methods/properties, and runtime type information',
        },
        {
          name: 'Module System and Declaration Files',
          description: 'ES6 modules, namespacing, type definitions, and declaration file creation',
        },
        {
          name: 'OOP and Functional Patterns',
          description: 'Classes, interfaces, mixins, higher-order functions, and advanced composition patterns',
        },
      ],
    },
    {
      name: 'Go',
      description: 'Efficient compiled language designed for scalability, simplicity, and fast compilation.',
      aspects: [
        {
          name: 'Goroutines and Channels',
          description: 'Lightweight concurrency model with goroutines and channel-based communication',
        },
        {
          name: 'Interface-based Design',
          description: 'Implicit interfaces, composition over inheritance, and duck typing patterns',
        },
        {
          name: 'Error Handling and Defer',
          description: 'Error propagation patterns, defer for cleanup, and panic recovery mechanisms',
        },
        {
          name: 'Package System and Build',
          description: 'Module organization, dependency management with Go modules, and cross-platform compilation',
        },
      ],
    },
  ],
  frameworks: [
    {
      name: 'Spring Boot',
      description: 'Rapid application development framework for building production-ready Java applications.',
      aspects: [
        {
          name: 'Dependency Injection and IoC',
          description: 'Core Spring concepts for managing application components',
        },
        {
          name: 'REST API Development',
          description: 'Building scalable HTTP endpoints and services',
        },
        {
          name: 'Spring Data and ORM',
          description: 'Database interaction with JPA and persistence layers',
        },
      ],
    },
    {
      name: 'Node JS',
      description: 'Non blocking(async) I/O, servers in JS and TS, awesome community.',
      aspects: [
        {
          name: 'Express',
          description: '',
        },
        {
          name: 'Asynchronus I/O',
          description: 'Non blocking I/0 i.e. performance++',
        },
        {
          name: 'Yarn and NPM',
          description: 'Package managers',
        },
      ],
      certifications: [
        {
          issuer: 'CutShort',
          certification: 'Node.js',
          link: 'https://cutshort.io/certificate/51879',
        },
      ],
    },
    {
      name: 'React JS',
      description: 'Septeration of concerns & JSX, fast, small, does the job.',
      aspects: [
        {
          name: 'Function and Class components',
          description: 'Way to create components',
        },
        {
          name: 'Hooks and Lifcycle methods',
          description: 'Way to create components',
        },
        {
          name: 'Redux',
          description: 'State management',
        },
      ],
      certifications: [
        {
          issuer: 'CutShort',
          certification: 'React.js',
          link: 'https://cutshort.io/certificate/36667',
        },
      ],
    },
  ],
  concepts: [
    {
      name: 'Object Oriented Design',
      description:
        'The science of translating real-world complex problems, to solutions ritten in code which is easy making the software easy to make and reason about.',
      aspects: [
        {
          name: 'Abstraction, Encapsulation, Inheritance, Polymorphism',
          description: 'Core object oriented programming principles',
        },
        {
          name: 'UML class, sequence and state diagrams',
          description: 'Technical Design',
        },
      ],
      certifications: [
        {
          issuer: 'Coursera',
          certification: 'Object Oriented Design',
          link: 'https://coursera.org/share/0e0932f0a9bbc733e8df666e9629acf1',
        },
        {
          issuer: 'LinkedIn',
          certification: 'Top 15%',
          link: 'https://www.linkedin.com/in/rathod-sahaab/skills/report/C%2B%2B',
        },
      ],
    },
    {
      name: 'Databases',
      description:
        'Most crucial data structue for majority of applications, almost always the bottle-neck.',
      aspects: [
        {
          name: 'ER model & Relational models',
          description: 'Database models',
        },
        {
          name: 'Normalization',
          description: 'DB Design',
        },
        {
          name: 'SQL: Structured Query Language',
          description: 'The language of RDBMSes',
        },
        {
          name: 'Indexes, partitions, sharding',
          description: 'Performance enhancement',
        },
        {
          name: 'PostgreSQL, MongoDB, Redis',
          description: 'Type of databases',
        },
      ],
    },
    {
      name: 'Computer Networks',
      description: 'Backbone of the world, how people lived before these?',
      aspects: [
        {
          name: 'TCP, UDP, HTTP 1.1/2, websockets, NBD',
          description: 'Protocols',
        },
        {
          name: 'TLS/SSL and SSL ceritificates',
          description: 'Encryption',
        },
        {
          name: 'OSI and TCP/IP',
          description: 'Layered Architecture',
        },
      ],
    },
    {
      name: 'Operating Systems',
      description: 'API for writing programs, utility to assure harmony between them.',
      aspects: [
        {
          name: 'Memory management and scheduling',
          description: 'Every program gets a fair share',
        },
        {
          name: 'File systems and IO',
          description: 'Everything is a file',
        },
        {
          name: 'Deadlocks',
          description: 'Causes and resolution of conflicts',
        },
      ],
    },
  ],
  tools: [
    {
      name: 'Git',
      description: 'Defacto source code manager',
      aspects: [
        {
          name: 'Basics',
          description: 'init, branches, push, pull, rebase etc.',
        },
        {
          name: 'Merge Conflict resolution',
          description: 'Inevitable',
        },
        {
          name: 'Cherrypicking and tree traversal',
          description: 'When history has to be dug up',
        },
      ],
    },
    {
      name: 'Linux',
      description: 'The omnipresent operating system.',
      aspects: [
        {
          name: 'Linux Programming',
          description: 'How to use linux APIs to write apps.',
        },
        {
          name: 'SSH into remote',
          description: 'Virtual machine management in the cloud',
        },
        {
          name: 'How to do things and CLI',
          description: 'Manpages and cheat.sh',
        },
      ],
    },
    {
      name: 'Docker',
      description: "The answer to 'If it works on your machine, the bring your machine'",
      aspects: [
        {
          name: 'Dockerfile and docker-compose',
          description: 'How to write the language of gods.',
        },
        {
          name: 'Depoyment experience',
          description: 'I can use it.',
        },
        {
          name: 'Deleting images and containers',
          description: 'Clean your room.',
        },
      ],
    },
    {
      name: 'Kafka',
      description: 'Distributed event streaming platform for building real-time data pipelines.',
      aspects: [
        {
          name: 'Producers and Consumers',
          description: 'Publishing and consuming messages from topics',
        },
        {
          name: 'Topics, Partitions, and Replication',
          description: 'Distributed message storage and fault tolerance',
        },
        {
          name: 'Stream Processing',
          description: 'Real-time data processing and transformations',
        },
      ],
    },
    {
      name: 'RabbitMQ',
      description: 'Message broker for reliable asynchronous communication between distributed systems.',
      aspects: [
        {
          name: 'Message Queues and Exchanges',
          description: 'Message routing and queue-based communication patterns',
        },
        {
          name: 'Acknowledgment and Reliability',
          description: 'Ensuring message delivery and preventing data loss',
        },
        {
          name: 'Publisher-Subscriber Patterns',
          description: 'Decoupling application components through messaging',
        },
      ],
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration platform for automating deployment, scaling, and management.',
      aspects: [
        {
          name: 'Pods, Services, and Deployments',
          description: 'Core Kubernetes primitives for running containerized applications',
        },
        {
          name: 'Scaling and Load Balancing',
          description: 'Auto-scaling and traffic distribution across instances',
        },
        {
          name: 'Configuration and Secrets Management',
          description: 'Managing application configuration and sensitive data',
        },
      ],
    },
    {
      name: 'AWS',
      description: 'Comprehensive cloud computing platform providing scalable infrastructure and services.',
      aspects: [
        {
          name: 'Compute Services',
          description: 'EC2, Lambda, and containerized workloads on ECS/EKS',
        },
        {
          name: 'Storage and Databases',
          description: 'S3, RDS, DynamoDB, and other data storage solutions',
        },
        {
          name: 'Networking and Security',
          description: 'VPC, IAM, security groups, and access management',
        },
      ],
    },
    {
      name: 'Terraform',
      description: 'Infrastructure as Code tool for provisioning and managing cloud resources declaratively.',
      aspects: [
        {
          name: 'Resource Definition and Modules',
          description: 'Writing HCL to declare infrastructure components',
        },
        {
          name: 'State Management',
          description: 'Managing infrastructure state and tracking resource changes',
        },
        {
          name: 'Multi-cloud Provisioning',
          description: 'Deploying to AWS, Azure, GCP with consistent configuration',
        },
      ],
    },
  ],
} as const;

export type ISkillTag = keyof typeof SKILLS;
export type ISkillTagDetails = IFilterTag<ISkillTag>;
const SKILLS_CATEGORY_NAME_MAP: { [K in ISkillTag]: string } = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  tools: 'Tools',
  concepts: 'Concepts'
}

export const SKILL_TAGS : ISkillTagDetails[] = (Object.keys(SKILLS) as ISkillTag[]).map((tag) => ({
  tag,
  count: SKILLS[tag].length,
  name: SKILLS_CATEGORY_NAME_MAP[tag],
}))
