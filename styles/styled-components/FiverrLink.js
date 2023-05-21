"use client";
import styled from "@emotion/styled";

const FiverrLink = styled.a`
  position: relative;
  color: ${(props) =>
    props.theme === "dark"
      ? "rgb(16, 185, 129)"
      : "rgb(52, 211, 153)"}; // green-500 for dark, green-400 for light
  text-decoration: none;

  &:hover {
    color: ${(props) =>
      props.theme === "dark"
        ? "rgb(6, 95, 70)"
        : "rgb(16, 185, 129)"}; // green-600 for dark, green-500 for light
  }

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
