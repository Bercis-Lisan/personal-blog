import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'



function Navbar() {
    const navigate = useNavigate()
    const[log,setlog] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user){

          setlog(true)
          console.log("user logged in")

        }else{
          setlog(false)
          console.log("user logged out")
        }

      })
      
    },[])


    function logout(){
      signOut(auth)
      navigate("/login")
      alert("logout success")
    }
    
  return (
    <header className='site-header page-container'>
      <Link to={"/home"} className='brand'>Bercis Lisan S<span></span></Link>
      <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} type='button' aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span>
      </button>
      <div className={`nav-backdrop ${menuOpen ? 'is-visible' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <div className='drawer-heading'><span className='eyebrow'>Navigate</span><button type='button' className='drawer-close' aria-label='Close navigation menu' onClick={() => setMenuOpen(false)}>×</button></div>
        <Link to={"/home"} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to={"/blogs"} onClick={() => setMenuOpen(false)}>Blogs</Link>
        <Link to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</Link>

            <a href="https://github.com/Bercis-Lisan" target="_blank" rel="noreferrer" className='social-link' title="GitHub" onClick={() => setMenuOpen(false)}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/bercis-lisan-s" target="_blank" rel="noreferrer" className='social-link' title="LinkedIn" onClick={() => setMenuOpen(false)}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            </a>

            {
              log?<button className='button-style nav-action' onClick={() => { setMenuOpen(false); logout() }} >Logout</button>:<button className='button-style nav-action' onClick={() => { setMenuOpen(false); navigate("/login") }}>Login</button>

            }
      </nav>  
      </header>
  )
}

export default Navbar