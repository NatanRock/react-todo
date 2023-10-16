import { useState } from 'react'
import { Button } from '../UI/Button'

import styles from './TodoForm.module.css'

export const TodoFrom = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  // const inputHandler = () =>

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="Enter new todo"
      />
    <Button type="submit" title="submit" className={styles.button}>Submit</Button>
    </form>
  )
}
