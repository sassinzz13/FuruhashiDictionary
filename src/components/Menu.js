import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
export const Menu = ({showMenu, active}) => {
  return (
    
        <ul className={active? 'flex-col flex items-center fixed  inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 p-8 justify-center md:hidden' : 'hidden'}>
            <AiFillCloseCircle onClick={showMenu} className='cursor-pointer' />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Hiragana</Link></li>
          <li><Link to="/">Katakana</Link></li>
          <li><Link to="/">Kanji</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
   
  )
}

export default Menu
