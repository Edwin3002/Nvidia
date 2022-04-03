import React from 'react'
import { Cards } from './Cards'
// import { Filter } from './Filter'
import '../style/style.css'
// import { UserContext } from '../helpers/UseContext'

export const App = () => {

  // const [filt, setFilt] = useState({
  //   name: 'Edwin',
  //   last_name: 'Ayala'
  // });

  return (
    <div >
      {/* <UserContext.Provider value={{ filt, setFilt }}> */}
        {/* <Filter></Filter> */}
        <Cards></Cards>
      {/* </UserContext.Provider> */}
    </div>
  )
}
