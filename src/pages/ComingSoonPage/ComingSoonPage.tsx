import { FC } from 'react'

interface IProps {
  title: string
}

const ComingSoonPage: FC<IProps> = ({ title }) => {
  return <div>{title}</div>
}

export default ComingSoonPage
