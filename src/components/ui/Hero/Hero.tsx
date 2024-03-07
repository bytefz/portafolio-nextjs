import NextLink from "next/link";

import { Link, useTheme } from "@nextui-org/react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

import { useState } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { theme } = useTheme();

  const [isAstroLoad, setIsAstroLoad] = useState(false);

  return (
    <section className={`container mx-auto py-60 2xl:px-60 px-10 sm:px-24`}>
      <div className="grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col items-start">
          <h1
            className={`text-4xl lg:text-6xl font-bold flex flex-col items-start`}
          >
            Hi! I{"'"}m{" "}
            <TypeAnimation
              sequence={[
                "Franzua Plasencia",
                1500,
                "Full-Stack Developer",
                1500,
              ]}
              wrapper="span"
              cursor
              repeat={Infinity}
              style={{
                color: theme?.colors.yellow600.value,
                whiteSpace: "nowrap",
              }}
            />
          </h1>
          <p className="text-2xl pt-7 lg:text-3xl">
            Full-Stack Developer with{" "}
            <span
              style={{
                color: theme?.colors.primarySolidHover.value,
              }}
            >
              Backend
            </span>{" "}
            Focus and Strong Technical, Interpersonal Skills, Able to Work
            Effectively with Cross-Functional Teams and Stakeholders
          </p>
          <Link
            href="/#contact"
            as={NextLink}
            animated={false}
            className="animate__animated animate__fadeInLeft animate__slow"
            css={{
              marginTop: "2rem",
              color: theme?.colors.success.value,
              paddingLeft: "0",
              paddingRight: "5rem",
            }}
          >
            <span className="text-xl">Let{"'"}s Connect</span>
            &nbsp; &nbsp; &nbsp;
            <BsFillArrowRightCircleFill size={22} />
          </Link>
        </div>
        <div
          className={`sm:hidden md:block ${styles["hero-astro"]} animate__animated animate__fadeInUp animate__slow`}
        />
      </div>
    </section>
  );
};
