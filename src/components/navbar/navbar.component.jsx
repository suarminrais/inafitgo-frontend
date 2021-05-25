import React, { useEffect, useState } from 'react'
import './navbar.styles.css'
import logo from './logo.png'

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
    <header className={sticky ? 'sticky' : 'black-nav'}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="inafitgo" />
          </a>
        </div>
        <div className="menus">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              {/* <li><a href="#tentang">About</a></li> */}
              <li><a href="#feature">Feature</a></li>
              <li><a href="#client">Client</a></li>
              <li><a href="/event">Event</a></li>
              <li><a href="/blog">Blog</a></li>
              {/* <li><a href="/contact">Contact</a></li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
