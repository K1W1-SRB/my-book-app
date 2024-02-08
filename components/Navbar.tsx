import React from 'react'

function Navbar() {
  return (
    <header className='h-20 bg-[#1C5D99] flex'>
        <div className='h-20 bg-[#1C5D99] flex'>
            <h1>Book App</h1>
        </div>
        <div>
            <ul>
                <li>Home</li> 
                <li>List</li>
                <li>Profile</li>
                <li>Log-in</li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar