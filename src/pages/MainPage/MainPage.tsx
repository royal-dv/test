import Contacts from '../../components/Contacts/Contacts'
import Header from '../../components/Header/Header'
import Layout from '../../components/Layout/Layout'

const MainPage = () => {
  return <Layout menu={<Header />} contacts={<Contacts />} />
}

export default MainPage
