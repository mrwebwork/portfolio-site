"use client";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;
  cursor: pointer;

  path {
    fill: none;
    stroke: white;
    stroke-width: 1px;
  }

  #top,
  #bottom {
    stroke-dasharray: 30, 75.39;
    transition: all 0.6s cubic-bezier(0.6, 0.33, 0.67, 1.29);
  }

  &.active #top,
  &.active #bottom {
    stroke-dashoffset: -60;
  }
`;

export default Svg;
