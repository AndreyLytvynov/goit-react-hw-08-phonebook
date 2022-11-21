import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 5px;
    font-weight: 500;
  }
  input {
    padding: 5px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: ${p => p.theme.radii.normal};
    height: 20px;
    &:focus {
      outline: 2px solid #6e65c0;
    }
  }
  button {
    margin: 0 auto;
    width: 100px;
    height: 30px;
    left: 449px;
    top: 3766px;
    border: none;
    background: #0e663d;
    border-radius: 5px;
    color: white;
    &:hover {
      background: #137e4c;
    }
  }
`;
