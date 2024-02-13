import { ICONS } from '@/constants';
import { GlobalStyles } from '@/styles';

import {
  TodoListAddTodoButton,
  TodoListBackdrop,
  TodoListCloseButton,
  TodoListContent,
  TodoListDayDescription,
  TodoListInput,
  TodoListOwn,
  TodoListWrapper,
} from './styles';
import { TodoItem } from './TodoItem';

const { CrossIcon } = ICONS;

export const TodoList = () => (
  <>
    <GlobalStyles /> {/* <= TODO: Remove later */}
    <TodoListBackdrop>
      <TodoListContent>
        <TodoListCloseButton>
          <CrossIcon />
        </TodoListCloseButton>

        <TodoListDayDescription>Su 10.10.2020</TodoListDayDescription>

        <TodoListWrapper>
          <TodoListInput type="text" placeholder="Add your todo" autoFocus />
          <TodoListAddTodoButton>Add</TodoListAddTodoButton>
        </TodoListWrapper>

        <TodoListOwn>
          <TodoItem>1. Learn React</TodoItem>
          <TodoItem>2. Learn Vue</TodoItem>
          <TodoItem>3. Learn Redux</TodoItem>
        </TodoListOwn>
      </TodoListContent>
    </TodoListBackdrop>
  </>
);
