export default function Projects() {
    const backgrounds = [
        '/Space1.jpg',
        '/Space2.jpg',
        '/Space3.jpg',
        '/Space4.jpg',
        '/Space5.jpg',
    ];

    const projects = [
        {
            title: "Restaurant Web App",
            description: `
                A user-friendly application designed to streamline restaurant operations for both staff and customers. 
                Features include:
                - Dynamic menu management allowing staff to update menu items in real time.
                - Table reservation system with visual table layout and availability tracking.
                - Order tracking for both dine-in and takeout orders, enabling better communication between kitchen and waitstaff.
                - Integrated feedback and rating system to capture customer reviews.

                The project was designed with scalability in mind to handle high traffic during peak hours. Emphasis was placed on a responsive design to ensure usability across devices, from desktops to smartphones. 
            `,
            tech: "React.js, Node.js, Java, MySQL, REST API",
        },
        {
            title: "Basics in Cloud Computing",
            description: `
                An introductory yet impactful project showcasing hands-on AWS deployment practices. Key achievements include:
                - Configuring virtual servers (EC2) with optimized instance types for performance and cost.
                - Creating secure, scalable storage solutions using S3 for hosting and backups.
                - Deploying an RDS database instance for persistent data storage.
                - Leveraging auto-scaling groups to handle traffic surges efficiently.

                The project also involved implementing IAM policies for secure access control, designing custom VPCs for network isolation, and utilizing Terraform for infrastructure-as-code to ensure repeatability of deployments.
            `,
            tech: "AWS (EC2, S3, RDS), Terraform, AWS CLI, VPC",
        },
        {
            title: "Cloud Development Project",
            description: `
                A high-impact project focusing on building a microservices architecture for a scalable, serverless application. Key components included:
                - AWS Lambda functions for executing backend logic on demand without provisioning servers.
                - API Gateway for exposing RESTful endpoints and handling request authentication.
                - Docker for containerizing services to ensure consistent deployment across environments.
                - GitHub Actions for CI/CD pipelines to automate testing and deployment workflows.

                The project incorporated best practices for cloud-native design, including event-driven architecture and fault-tolerant services. Emphasis was placed on observability through CloudWatch metrics and X-Ray tracing.
            `,
            tech: "AWS Lambda, Docker, API Gateway, Jenkins, CloudWatch",
        },
        {
            title: "User Management System",
            description: `
                A secure and scalable system designed to manage user authentication and role-based access control. Key features included:
                - Implementation of a JWT-based authentication mechanism to ensure secure user sessions.
                - Role-based access control (RBAC) to assign granular permissions to different user groups.
                - A responsive and intuitive frontend interface built with React.js, optimized for mobile and desktop users.
                - Integration of hashing algorithms (bcrypt) to securely store user passwords.

                The backend was architected with modular controllers and services to separate concerns, making the application highly maintainable. The project also included comprehensive test coverage using Jest for unit and integration tests.
            `,
            tech: "MySQL, JavaScript, Java, CSS, HTML",
        },
        {
            title: "Database Management System",
            description: `
                A robust database system designed for efficient data storage and retrieval. Highlights of the project include:
                - Designing relational database schemas optimized for normalization and reduced redundancy.
                - Implementing indexing strategies to enhance query performance for large datasets.
                - Scheduling automated backups and restores to ensure data safety.
                - Configuring read replicas for improved scalability and availability during high query loads.
            `,
            tech: "MySQL, PostgreSQL, Dbgate, Java",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
                        style={{
                            backgroundImage: `url(${backgrounds[index % backgrounds.length]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white',
                        }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
                        <p className="text-base mb-4 whitespace-pre-line">{project.description}</p>
                        <p className="text-sm">
                            <strong>Technologies:</strong> {project.tech}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

