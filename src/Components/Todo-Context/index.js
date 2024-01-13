import Todo from './Todo';
import { TodoProvider } from './TodoContext';

const TodoApp = () => {
  return (
    <TodoProvider>
      <Todo/>
    </TodoProvider>
  );
};

export default TodoApp;
