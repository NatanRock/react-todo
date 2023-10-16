import { Button } from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

import styles from './TodoActions.module.css'

export const TodoActions = ({ deleteTodos, deleteCompleted, completedTodosExist }) => {
    return (
        <div className={styles.button_wrapper}>
            <Button onClick={() => deleteTodos()} title="reset todos"><RiDeleteBin2Line /></Button>
            <Button onClick={() => deleteCompleted()} disabled={!completedTodosExist} title="clear completed todos"><RiRefreshLine /></Button>
        </div>
    )
}
