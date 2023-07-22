import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #ffffff;
  font-size: 20px;

  &:hover {
    color: #fafa02;
  }
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

