import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BtnBack = styled(Link)`
  padding: 3px 5px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  //   margin-left: 50px;

  &:hover {
    background-color: #483d8b;
    color: white;
  }
`;

export const Wrap = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  //   display: flex;
`;

export const WrapCard = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  //   flex-direction: column;
`;

export const DetailsBtn = styled(Link)`
  padding: 3px 5px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  //   margin-left: 50px;
  margin-left: 5px;

  &:hover {
    background-color: #483d8b;
    color: white;
  }
`;
