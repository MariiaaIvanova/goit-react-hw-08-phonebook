import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  
  border: 3px solid #f08080;
  border-radius: 4px;
  margin: 0 auto;
  border-radius: 30px;
  letter-spacing: 0.06em;
  border: 3px solid #342e69;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
   margin-bottom: 15px;
  color: black;
  font-size: 18px;
  letter-spacing: 0.06em;
`;

export const Input = styled.input`
 padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
  font-size: 15px;
  &:focus {
    color: black;
    font-size: 15px;
  }
  margin-top: 5px;
  letter-spacing: 0.06em;
`;

export const Button = styled.button`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid #342e69;
  background-color: #d4d0f5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
  background-color: #342e69;  
  color: #ffff;
  }
  cursor: pointer;
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  letter-spacing: 0.06em;
`;