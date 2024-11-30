export default function Projects() {
    const projects = [
        {
            title: "Restaurant Web App",
            description:
                "A user-friendly app for restaurant staff and customers, featuring menu management, table reservations, and order tracking.",
            tech: "React.js, Node.js, Express.js, MongoDB",
        },
        {
            title: "Basics in Cloud Computing",
            description:
                "Hands-on AWS deployment with EC2, S3, and RDS, along with auto-scaling and cost optimization.",
            tech: "AWS, Terraform, AWS CLI",
        },
        {
            title: "Cloud Development Project",
            description:
                "Microservices architecture and serverless functions integrated with CI/CD pipelines.",
            tech: "AWS Lambda, Docker, API Gateway, Jenkins",
        },
        {
            title: "User Management System",
            description:
                "A secure system with authentication, role-based access control, and responsive design.",
            tech: "React.js, Node.js, PostgreSQL",
        },
        {
            title: "Database Management System",
            description:
                "Optimized relational database with indexing, query optimization, and backup scheduling.",
            tech: "PostgreSQL, pgAdmin",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-8">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-semibold">{project.title}</h2>
                        <p className="mt-2">{project.description}</p>
                        <p className="mt-2 text-sm text-gray-400">
                            <strong>Technologies:</strong> {project.tech}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
