import styled from "@emotion/styled";
import Link from "next/link";

const NavLink = styled(Link)`
  position: relative;
  color: rgb(var(--foreground-rgb));
  text-decoration: none;

  &:hover {
    color: rgb(var(--foreground-rgb));
  }

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: -1px;
    left: 0;
    background-color: rgb(var(--foreground-rgb));
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export default NavLink;
