"use client"
import React, { useContext } from 'react'
import styles from './toggle.module.scss'
import { ThemeContext } from '@/context/ThemeContext';
import { themeCtx } from '@/types/allTypes';
const Toggle = () => {
  const {mode,toggle} = useContext(ThemeContext) as themeCtx;
  return (
    <div className={styles.main} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌞</div>
        <div className={styles.ball} style={mode==="light" ? {left:"2px"} : {right:"2px"}}/>
    </div>
  )
}

export default Toggle;