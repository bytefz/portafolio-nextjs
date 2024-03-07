import NextLink from "next/link";

import { Button, Card, Link } from "@nextui-org/react";

import { FaPython, FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiDart,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { IExpertise } from "@/entities";

const listExpertise: IExpertise[] = [
  {
    name: "Backend Developer",
    description:
      "Backend developer passionate about building robust and efficient applications using languages like Python and Typescript, and frameworks like FastAPI, Flask, Nestjs and Express.",
    projectsUrl: "/#",
    tools: [SiTypescript, FaPython, SiNestjs, SiExpress, SiFlask, SiFastapi],
  },
  {
    name: "Frontend Developer",
    description:
      "I’m a passionate frontend developer who works with languages like Javascript and Typescript, and frameworks like React and Nextjs. I love the opportunity to create stunning visual experiences for users and the excitement of seeing how a website design comes to life.",
    projectsUrl: "/#",
    tools: [SiJavascript, SiTypescript, FaReact, SiNextdotjs],
  },
  {
    name: "Mobile Developer",
    description:
      "As a mobile developer, I have experience working with the Dart programming language and the Flutter development framework. I am passionate about the opportunity to create mobile apps that are fluid and attractive to users.",
    projectsUrl: "/#",
    tools: [SiDart, SiFlutter],
  },
];

export const Tecnologies = () => {
  return (
    <section className="container mx-auto px-10 flex flex-col items-center pb-10">
      <h2 id="expertise" className="font-bold text-5xl pb-5">
        My Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {listExpertise.map((expertise) => (
          <CardTecnology key={expertise.name} {...expertise} />
        ))}
      </div>
    </section>
  );
};

const CardTecnology: React.FC<IExpertise> = ({
  name,
  description,
  projectsUrl,
  tools,
}) => {
  return (
    <Card
      isHoverable
      css={{
        borderColor: "transparent",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 15px 25px rgba(129, 124, 124, 0.15)",
      }}
    >
      <Card.Header>
        <p className="font-semibold text-xl">{name}</p>
      </Card.Header>
      <Card.Body>
        <p className="text-base">{description}</p>
      </Card.Body>
      <Card.Footer
        css={{
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.1)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div className="container grid grid-cols-2">
          <div className="flex items-center">
            {tools.map((Tool: IconType) => (
              <Tool key={Tool.name} className="text-2xl mr-2" />
            ))}
          </div>
          <div className="flex justify-end">
            <Button flat auto rounded color={"secondary"}>
              <Link
                className="text-sm"
                color={"inherit"}
                as={NextLink}
                href={projectsUrl}
              >
                Projects
              </Link>
            </Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};
