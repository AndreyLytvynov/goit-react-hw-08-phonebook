import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 1, 16;
    letter-spacing: 0.01em;
    :nth-child(n + 2) {
      margin-top: 10px;
    }

    span {
      margin-bottom: 5px;
    }
  }
  input {
    height: 30px;
    padding-left: 20px;
    max-width: 100%;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
  }
  button {
    margin: 0 auto;
    margin-top: 10px;
    width: 100px;
    height: 30px;
    left: 449px;
    top: 3766px;
    border: none;
    font-weight: 700;
    background: #4f856c;
    border-radius: 5px;
    color: white;
    :hover {
      background: #307957;
      cursor: pointer;
    }
  }
  p {
    margin-right: 10px;
    font-size: 15px;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;

    border-radius: 3px;
    padding: 3px;
    background-color: #6c7c7c;
  }
`;
