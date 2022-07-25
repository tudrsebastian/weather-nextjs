import type { NextPage } from 'next'
import SearchBox from '../../components/SearchBox/SearchBox'
import CurrentLocation from '../../components/CurrentLocation/CurrentLocation';
const Main: NextPage = () => {

  return (
    <div>
      <SearchBox />
      <CurrentLocation />
    </div>
  )
}

export default Main
