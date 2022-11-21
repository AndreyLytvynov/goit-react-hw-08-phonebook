import styled from 'styled-components';

export const Contacts = styled.ul`
  min-width: 300px;
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    border-radius: ${p => p.theme.radii.normal};
  }
  button {
    margin-left: 10px;
    font-size: 10px;
    width: 70px;
    height: 20px;
    left: 449px;
    top: 3766px;
    border: none;
    background: #2a2369;
    border-radius: 5px;
    color: white;
    &:hover {
      background: #433a94;
    }
  }
`;
