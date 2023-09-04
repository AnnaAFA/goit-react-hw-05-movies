import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BtnBack = styled(Link)`
  padding: 3px 5px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #b0c4de;
  }
`;

export const Wrap = styled.div`
  margin-top: 20px;
  margin-left: 50px;
`;

export const WrapCard = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const DetailsBtn = styled(Link)`
  padding: 3px 5px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  margin-left: 5px;

  &:hover {
    background-color: #b0c4de;
  }
`;
