import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyle = styled.nav`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 50px;
`;

export const LinkStyle = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  border: 2px solid black;

  &.active {
    color: white;
    background-color: black;
  }

  &:hover {
    background-color: #483d8b;
    color: white;
  }
`;
