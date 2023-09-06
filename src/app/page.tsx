import HomeContainer from '@/container/home'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export interface HomeProps {}

const Home: NextPage = () => {
  return (
    <div>
      <HomeContainer />
    </div>
  )
}

export default Home
