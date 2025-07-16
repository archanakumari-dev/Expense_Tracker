import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='h-screen '>
      <Header />
      <div className='h-[85%] overflow-auto' >
         {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout