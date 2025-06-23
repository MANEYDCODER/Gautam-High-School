import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <Link href="/admin/manage-content/home">Home</Link>
        <Link href="/admin/manage-content/history">History</Link>
        <Link href="/admin/manage-content/mission">Mission</Link>
        {children}
    </div>
  )
}

export default Layout