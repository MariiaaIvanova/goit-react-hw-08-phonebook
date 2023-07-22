import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  
  border-radius: 30px;
  list-style: none;
  margin-right: auto;
  margin-left: auto;
  letter-spacing: 0.06em;
  border: 3px solid #342e69;
  padding: 30px;
`;

export const Item = styled.li`
 
  padding: 5px 20px 10px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  
`;

export const Button = styled.button`
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 6px;
  border: 2px solid #342e69;

  background-color: #d4d0f5;

  &:hover,
  &:focus {
  background-color: #342e69;
  color: #ffff;
  }
  cursor: pointer;
  letter-spacing: 0.06em;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;