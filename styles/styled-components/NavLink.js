"use client";

import styled from "@emotion/styled";

import Link from "next/link";

const NavLink = styled(Link)`
  position: relative;
  color: var(--foreground);
  text-decoration: none;

  &:hover {
    color: var(--foreground);
  }

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: -1px;
    left: 0;
    background-color: var(--foreground);
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export default NavLink;
