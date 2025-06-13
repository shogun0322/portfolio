export default function TechStack() {
  return (
    <div className="container flex flex-row gap-large h-screen items-center">
      <div className="flex-1 text-left text-l font-bold hidden md:block">
        I’m a software engineer with 5+ years of experience in full-stack
        development.
        <br />
        <br />
        I specialize in building high-performance, scalable systems using React,
        Node.js, GraphQL, and microservices. I enjoy transforming ideas into
        working products — from clean front-end interfaces to reliable backend
        infrastructure.
        <br />
        <br />
        Currently, I’m working at SKY ICT where I’ve helped build real-time
        dashboards, webviews, and CMS for SAWASDEE airport application.
      </div>

      <div className="flex-1 flex flex-col text-left items-flex-start md:pb-105">
        <div className="text-mint text-l font-bold">Tech Stack</div>
        <div className="text-2m">
          Language: JavasScript, TypeScript
          <br />
          Front-end: React.js, Next.js, React Native,
          <br />
          Back-end: Node.js, NestJS, GraphQL, Fastify
          <br />
          Database: PostgreSQL, MongoDBTools: Docker, Git, Jest
        </div>
      </div>
    </div>
  );
}
