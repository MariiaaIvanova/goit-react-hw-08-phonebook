
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
   margin-top: 10px;
   letter-spacing: 0.06em;
   
`;

export const Label = styled.label`
  color: #000;
  font-size: 15px;
 letter-spacing: 0.06em;
`;

export const Input = styled.input`
 
  font-size: 15px;
  padding: 8px 12px;
  margin: 0 auto;
  border-radius: 6px;
  border: none;
  outline: 0;
  box-shadow: 0 1px 6px 0 #20212447;
  font-size: 15px;
  &:focus {
    color: black;
    font-size: 15px;
  }
   letter-spacing: 0.06em;
`;