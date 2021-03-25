import React, { useEffect, useState } from 'react'
import './navbar.styles.css'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const onsScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      onsScroll();
    }
  }, [])

  return (
    <header className={sticky ? 'sticky' : ''}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="https://bibit.id/img/logoBibitFix.svg" alt="" />
          </a>
        </div>
        <div className="menus">
          <nav>
            <ul>
              <li><a href="/">As</a></li>
              <li><a href="/">As</a></li>
              <li><a href="/">As</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
