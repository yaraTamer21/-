import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
    const HandleReplace=()=>{
        History.replace('/form')
    }
  return (
    <div className="home d-flex flex-column align-items-center mt-5 w-50 py-3 m-auto  justify-content-center">
        <img src='./images/images 1.png' className='mb-1' style={{width:"200px"}}/>
        <img src='./images/2022.png' style={{width:"200px" }}/>
        <NavLink to='/form'>
        <button onClick={HandleReplace} className='btn btn-primary mt-3 px-5 '>ابدء</button>

        </NavLink>
    </div>
  )
}

export default Home