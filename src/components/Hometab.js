import React from 'react'
import homeimg from '../homeimg.gif'
export default function Hometab() {
  return (
    <div className='homer'>
        <img className='homeimager' src={homeimg} alt="Image"/>
        <h2 id='hometext'>
          Texter | Code With R
        </h2>
    </div>
  )
}
