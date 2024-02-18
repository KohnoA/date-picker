import styled from 'styled-components';

import { flex } from '@/styles';

export const TodoListBackdrop = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${flex()}

  padding: 5px;

  background-color: ${({ theme }) => theme.colors.backdrop};
`;

export const TodoListContent = styled.div`
  position: relative;
  max-width: 300px;

  margin: auto;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.high};
`;

export const TodoListCloseButton = styled.button`
  position: absolute;

  top: 8px;
  right: 8px;

  ${flex()}

  background-color: transparent;
  border: none;
  transition: opacity ${({ theme }) => theme.duration};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.opacity.high};
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
