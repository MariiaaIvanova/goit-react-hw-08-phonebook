import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: white;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  padding: 3px 9px;
  font-size: 18px;
  border-radius: 6px;
  border: 2px solid #ffff;
  background-color: #342e69;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
  background-color:  #ffff;  
  color: #342e69;
  }
  cursor: pointer;
  margin-right: 20px;
  font-weight: 700;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
`;
export const SpanText = styled.span`
  font-weight: 700;
  color: #fafa02;
  font-size: 20px;
`;