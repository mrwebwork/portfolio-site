"use client";

import styled from "@emotion/styled";

const size = {
  mobile: "375px",
  tablet: "642px",
  laptop: "992px",
  desktop: "1024px",
};

export const tablet = (inner) => css`
  @media (min-width: ${size.tablet}) {
    ${inner};
  }
`;

const FiverrLink = styled.a`
  position: relative;
  text-decoration: underline;
  text-underline-offset: 4.7px;

  /* color: ${(props) =>
    props.theme === "dark" ? "rgb(16, 185, 120)" : "rgb(16, 185, 129)"} */

  /* &:hover {
    color: ${(props) =>
    props.theme === "dark" ? "rgb(6, 95, 70)" : "rgb(16, 185, 129)"}; 
  } */

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: -1px;
    left: 0;
    background-color: ${(props) =>
      props.theme === "dark"
        ? "rgb(16, 185, 129)"
        : "rgb(52, 211, 153)"}; // green-500 for dark, green-400 for light
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export default FiverrLink;
