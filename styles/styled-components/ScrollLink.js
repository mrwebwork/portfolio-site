"use client";

import styled from "@emotion/styled";

import dynamic from "next/dynamic";

//* Define ScrollLink as a dynamic import
const ScrollLinkImport = dynamic(
  () => import("react-scroll").then((mod) => mod.Link),
  {
    ssr: false,
  }
);

const ScrollLink = styled(ScrollLinkImport)`
  position: relative;
  color: var(--foreground);
  text-decoration: none;
  cursor: pointer;

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

  &.mobile {
    &:hover {
      color: var(--background);
      ::before {
        background-color: var(--background);
      }
    }
  }
`;

export default ScrollLink;
