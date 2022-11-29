import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import {AiOutlineMenu} from 'react-icons/ai'




const Navbar = () => {

  const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
  }
  return (
    <div className='fixed w-full text-white flex justify-between p-4 items-center'>
      <div className='text-2xl font-bold text-center uppercase'>
        <h1 className='block text-2xl'>Furuhashi <span className=' text-[10px] lowercase'>by Izami</span></h1>
      </div>

      <nav>

        <div className='absolute right-1 md:hidden top-4 scale-150'>
        <AiOutlineMenu onClick={showMenu} className='scale-150 cursor-pointer'/>
          
        </div>
        <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/20'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Hiragana</Link></li>
          <li><Link to="/">Katakana</Link></li>
          <li><Link to="/">Kanji</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>

        <Menu showMenu={showMenu} active={active} />
      </nav>
    </div>
  )
}

export default Navbar