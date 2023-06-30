"use client";
import styled from "@emotion/styled";

export const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  .navbar-content {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    max-width: 1200px;
    margin: auto;
    nav {
      display: flex;
      align-items: center;
      li {
        margin-right: 10px;
        list-style: none;
        a {
          text-decoration: none;
          color: black;
          &:hover {
            color: gray;
          }
        }
      }
    }
  }
`;
