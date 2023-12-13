import React from 'react'
import "./Main.css"
import Image from '../assets/image/working_with_computer.svg'
const Main = () => {
  return (
    <div className='d-flex justify-content-between'>

      <div className='m-auto'>
        <h2>
          More than just shorter links
        </h2>
        <p>
          Build your brands recognition and get detailed insights on how your links are performing.
        </p>
        <button className='btn btn-info'>Get Started</button>
      </div>

      <div>
        <img src={Image} alt="" />
      </div>
    </div >
  )
}

export default Main