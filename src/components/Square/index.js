import styles from './Square.module.css'
function Square({ value, handleClick, isClass }) {
  return (
    <button
      className={`${styles.square} ${isClass}`}
      onClick={() => {
        handleClick()
      }}
    >
      {value}
    </button>
  )
}

export default Square
