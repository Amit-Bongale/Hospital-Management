import React from 'react'

import { useDispatch } from 'react-redux'
import { adminlogout } from '../../Redux/Admin/Admin'

import { Link } from 'react-router-dom'

function Adminnav() {

  const dispatch = useDispatch()

  const navItems = [
    {name: 'Dashboard', icon: "", href: '/admin/dashboard' },
    {name: 'Manage Users', icon: "", href: '/admin/manageusers' },
    {name: 'Settings', icon: "", href: '/admin/settings' },
    {name: 'Help', icon: "", href: '/admin/help' },
  ]

  
  return (

  <nav className='bg-gray-50 w-2/12 h-[100vh] border-r-2'>
    { navItems.map((item , key) => (
      <span className="grid items-start px-2 text-xl font-medium lg:px-4">
      <Link
        to={item.href}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black">
        <button> {item.name} </button>
      </Link>
    </span>
    ))}

    <button onClick={() => dispatch(adminlogout())} className='bg-black text-white py-3 px-6 rounded-3xl m-4'> logout </button>
  </nav>

  )
}

export default Adminnav