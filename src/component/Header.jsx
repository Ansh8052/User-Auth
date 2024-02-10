import React from 'react'
import {FaSearch} from 'react-icons/Fa';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center flex-wrap max-w-6xl mx-auto p-3'>
        <Link to = '/'>
        <h1 className='font-bold font-serif text-sm sm:text-2xl'>
            <span className='text-slate-500'>Real</span>
            <span className='text-red-500'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'> 
            <input type="text" placeholder='Search...'
             className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch classname= 'text-slate-600'/>
        </form>
        <ul className='flex gap-4 text-slate-700 font-serif'>
        <Link to = '/'>
             <li className='hidden sm:inline hover:underline'>Home</li>
         </Link>
         <Link to = '/about'>
            <li className='hover:underline'>About</li>
          </Link>  
          <Link to = '/signin'>
            <li className='hover:underline'>Sign In</li>
           </Link> 
        </ul>
        </div>
    </header>
    )
}
