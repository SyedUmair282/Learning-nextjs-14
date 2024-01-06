import React from 'react'
import styles from './toggle.module.scss'
const Toggle = () => {
    let mode='light'
  return (
    <div className={styles.main}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌞</div>
        <div className={styles.ball} style={mode==="light" ? {left:"2px"} : {right:"2px"}}/>
    </div>
  )
}

export default Toggle;