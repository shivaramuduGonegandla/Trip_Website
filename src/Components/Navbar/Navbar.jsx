import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";

const Navbar = () => {
  return (
    <>
    <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a href='#' className='logo'></a>
          <h1><SiYourtraveldottv className='icon'/>Dot</h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default Navbar