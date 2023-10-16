import styles from './TodoList.module.css'
import { Todo } from './Todo'

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todo_list}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))
      ) : (
        <h3>No todos yet</h3>
      )}
    </div>
  )
}
