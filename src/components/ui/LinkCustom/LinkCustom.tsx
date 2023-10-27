import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './LinkCustom.module.scss'

interface IProps {
  title?: string | number | ReactNode
  to: string
  className?: string
}

const LinkCustom: FC<IProps> = ({ title, to, className }) => {
  return (
    <Link className={`${styles.link} ${className ? className : ''}`} to={to}>
      {title}
    </Link>
  )
}

export default LinkCustom
