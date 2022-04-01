import React from 'react'
import { Cards } from './Cards'
import { Filter } from './Filter'
import '../style/style.css'

export const App = () => {
  return (
    <div className='contenedor'>
    <Filter></Filter>
    <Cards></Cards>
    </div>
  )
}
