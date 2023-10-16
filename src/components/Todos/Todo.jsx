import { RiTodoLine, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

export const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoLine className={styles.icon_todo} />
      <p className={styles.text}>{todo.text} </p>
      <div className={styles.button_wrapper}>
        <RiDeleteBin2Line onClick={() => deleteTodo(todo.id)} className={styles.icon_delete} />
        <FaCheck className={styles.icon_check} onClick={() => toggleTodo(todo.id)} />
      </div>
    </div>
  )
}
