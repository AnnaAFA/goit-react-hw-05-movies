import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  gap: 5px;

  input {
    width: 200px;
    height: 20px;
    border-color: black;
    border-radius: 8px;
    padding: 3px;
  }

  button {
    padding: 3px 15px;
    border-radius: 7px;
    border: 1px solid black;
    background-color: black;
    color: white;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #b0c4de;
      color: black;
    }
  }
`;
