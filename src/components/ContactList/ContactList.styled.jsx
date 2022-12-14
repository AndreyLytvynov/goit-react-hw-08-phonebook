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
    display: flex;
    font-size: 20px;
    padding: 5px;
    border: none;
    border-radius: ${p => p.theme.radii.normal};
    &:hover {
      background: #433a94;
      color: #fff;
    }
  }
`;
