import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
`;
export const UserNameStyled = styled.p`
  color: white;
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
  span {
    margin-left: 5px;
  }
`;

export const ButtonStyled = styled.button`
  margin-left: 10px;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  border-radius: 3px;
  border: none;
  display: flex;
  font-size: 20px;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  padding: 5px 5px;
  text-shadow: 0px 1px 0px #528ecc;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #378de5;
  }
  span {
    margin-right: 5px;
    font-weight: 500;
    font-size: 10px;
  }
`;

export const ButtonLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 10px;
  /* box-shadow: 1px 4px 9px 0px #1564ad; */
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #79bbff;
  border-radius: 3px;

  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
  }
  span {
    margin-right: 10px;
  }
`;
