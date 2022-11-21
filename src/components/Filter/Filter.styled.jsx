import styled from 'styled-components';

export const FilterField = styled.label`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  span {
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 5px;
    font-weight: 500;
  }
  input {
    padding: 5px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: ${p => p.theme.radii.normal};
    height: 10px;
    &:focus {
      outline: 2px solid #6e65c0;
    }
  }
`;
