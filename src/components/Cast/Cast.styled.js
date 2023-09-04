import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 150px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  background-color: #c4daf5;
`;

export const Name = styled.p`
  margin: 0;
`;

export const Character = styled.p`
  margin: 0;
`;

export const Image = styled.img`
  border-radius: 3px;
`;
