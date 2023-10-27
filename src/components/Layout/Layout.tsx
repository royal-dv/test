import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'

interface IProps {
  menu?: ReactNode
  children?: ReactNode
  lang?: ReactNode
  contacts?: ReactNode
}

const Layout: FC<IProps> = ({ children, menu, contacts }) => {
  return (
    <div className={styles.layout}>
      {children}
      <div className={styles.layout_left}>{menu}</div>
      <div className={styles.layout_right}></div>
    </div>
  )
}

export default Layout
