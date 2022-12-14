import styled from 'styled-components';

export const EditFormStyled = styled.form`
  padding: 20px;
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
    padding: 5px 15px;
    height: 30px;
    left: 449px;
    top: 3766px;
    border: none;
    background-color: #1b7d51;
    border-radius: 5px;
    color: white;
    text-align: center;
    &:hover {
      background: #1f5b3f;
    }
  }
`;
