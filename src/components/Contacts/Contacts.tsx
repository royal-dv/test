import LinkCustom from '../ui/LinkCustom/LinkCustom'
import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <LinkCustom to={'tel:+7 (495) 123-45-67'} title={'+7 (495) 123-45-67'} />
      <button>Контакты</button>
    </div>
  )
}

export default Contacts
