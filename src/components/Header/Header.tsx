import LinkCustom from '../ui/LinkCustom/LinkCustom'
import Logo from '../Logo/Logo'
import { content } from '../../settings/content'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header__menu}>
        {content.routerMenu.map((menuItem) => {
          return <LinkCustom to={menuItem.path} title={menuItem.title} />
        })}
      </div>
    </div>
  )
}

export default Header
