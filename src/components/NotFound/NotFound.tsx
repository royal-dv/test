import Layout from '../Layout/Layout'
import { content } from '../../settings/content'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.not_found}>{content.notFound}</div>
    </Layout>
  )
}

export default NotFound
