import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { FaList } from 'react-icons/fa'
import './Header.scss'

const videoHeight = window.innerHeight
console.log(videoHeight)

const links = [
  'business unit',
  'finance',
  'carrière',
  'communauté',
  'carrières',
  'contact',
]

const Header = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setSticky(window.pageYOffset > videoHeight)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })
  return (
    <header className="header">
      <div className={classnames('header__container', { sticky })}>
        <nav className="header__nav">
          <FaList className="header__navToggle" />
          <a href="/" className="header__logo"></a>
          <ul className="header__menu">
            {links.map((link) => (
              <li>{link}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
