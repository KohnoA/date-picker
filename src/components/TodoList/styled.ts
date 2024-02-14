import styled from 'styled-components';

import { borderRadius, colors, opacity } from '@/constants';
import { flex } from '@/styles';

export const TodoListBackdrop = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  background-color: ${colors.backdrop};
`;

export const TodoListContent = styled.div`
  position: relative;
  max-width: 300px;

  margin: auto;
  padding: 20px;

  background-color: ${colors.white};
  border-radius: ${borderRadius.high};
`;

export const TodoListCloseButton = styled.button`
  position: absolute;

  top: 8px;
  right: 8px;

  ${flex()}

  background-color: transparent;
  border: none;
  transition: opacity 200ms;
  cursor: pointer;

  &:hover {
    opacity: ${opacity.low};
  }

  &:active {
    opacity: ${opacity.high};
  }
`;

export const TodoListDayDescription = styled.p`
  margin-bottom: 15px;

  font-weight: 600;
`;

export const TodoListOwn = styled.ul`
  ${flex()}

  flex-direction: column;

  list-style: none;
`;
