import Link from "next/link";

import { Navbar } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  href: string;
  title: string;
  urlname: string;
  isCollapse?: boolean;
}

export const LinkNav: React.FC<Props> = ({
  title,
  href,
  urlname,
  isCollapse = false,
}) => {
  const { asPath } = useRouter();
  return (
    <Navbar.Link
      isActive={asPath == urlname}
      variant={isCollapse ? "underline" : "highlight"}
      href={href}
      as={Link}
      className="animate__animated animate__fadeIn"
    >
      {title}
    </Navbar.Link>
  );
};
