import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const work = [
    {
      image: "/work/ml.webp",
      title: "METTLINK - Location Tracking & Incident",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/mioc.webp",
      title: "MIOC – Smart Facility Management",
      description: "React.js, Node.js, WebSocket, Chart.js / D3.js, PostgreSQL",
      link: "METTLINK",
    },
    {
      image: "/work/swdp.webp",
      title: "SAWASDEE  – Airport Premium Service Booking Platform",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/indoormap.webp",
      title: "SAWASDEE App – Indoor Map Feature",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/cms.webp",
      title: "SAWASDEE App – End-to-End Content Management & Display Solution",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/hop.webp",
      title: "Hop Date – Real-time dating platform for live events",
      description: "React, GraphQL, Node.js, PostgreSQL",
      link: "METTLINK",
    },
  ];
  return (
    <div className="container">
      <div className="text-xl font-bold mb-4">What I’ve Built</div>
      <div className="grid grid-cols-2 gap-medium-large">
        {work.map((row) => {
          const { image, title, description, link } = row;
          return (
            <Link className="archive-item-project cursor-pointer" href={link}>
              <Image
                src={image}
                alt="Example"
                width={1600}
                height={900}
                className="w-full h-auto mb-spacing-small"
                sizes="(min-width: 1100px) 80vw, 100vw"
              />
              <div className="text-l font-bold">{title}</div>
              <div className="text-m text-stone-400">{description}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
