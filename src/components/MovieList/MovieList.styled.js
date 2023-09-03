import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  list-style: circle;
`;

export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #cd5c5c;
  }
`;
