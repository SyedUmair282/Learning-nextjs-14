import React from 'react'
import styles from './page.module.scss'
const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>
        <h1 className='text-6xl font-bold'>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout;