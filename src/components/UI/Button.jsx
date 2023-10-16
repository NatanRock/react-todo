import styles from './Button.module.css'

export const Button = (props) => {
    const { className = '', children, disabled = false } = props

    return (
        <button
            {...props}
            className={`${styles.button} ${className}`}

            disabled={disabled}
        >
            {children}
        </button>
    )
}
