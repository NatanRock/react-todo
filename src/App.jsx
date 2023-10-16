import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoList } from './components/Todos/TodoList'
import { TodoFrom } from './components/Todos/TodoForm'
import { TodoActions } from './components/Todos/TodoActions'

import styles from './App.module.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo },
      ),
    )
  }

  const deleteAllTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.todo_wrapper}>
      <h1 className={styles.todo_title}>Todo App</h1>
      <TodoFrom addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          completedTodosExist={!!completedTodosCount}
          deleteTodos={deleteAllTodosHandler}
          deleteCompleted={deleteCompletedTodos}
        />
      )}
      <TodoList toggleTodo={toggleTodoHandler} deleteTodo={deleteTodoHandler} todos={todos} />

      {!!completedTodosCount && (
        <h4>
          You have completed{' '}
          {`${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}
        </h4>
      )}
    </div>
  )
}

export default App
