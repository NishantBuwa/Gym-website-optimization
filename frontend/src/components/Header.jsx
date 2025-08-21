import React,{useState, useEffect} from 'react'
import logo1 from '../assests/logo1.webp'

function Header() {

  const [scrolled, setScroll] = useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      setScroll(window.scrollY>20)
    }

    window.addEventListener('scroll',handleScroll)

    return()=> window.removeEventListener('scroll',handleScroll)
  },[])

  return (
    <div className={`sticky z-50 top-0 left-0 w-full transition-all duration-200 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40" // blurred semi-transparent
          : "bg-black"
      } text-white`
    }>
      <div className='Header flex items-center justify-between md:py-1 font-bold sm:text-lg text-[10px] w-full p-1 sm'>
        <div className="left sm:p-0 ml-4">
          <img src={logo1} alt=""  width={229} height={210}  className="sm:h-[80px] sm:w-auto h-[30px] w-auto invert"/>
        </div>
        <div className="right flex md:gap-12 md:mr-8 sm:gap-6 mr-4 gap-3 ">
          <a to='/'>Home</a>
          <a to='/'>About</a>
          <a to='/signup'>Signup</a>
          <a to='/login'>Login</a>
        </div>
      </div>
    </div>
  )
}

export default Header