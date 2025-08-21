import React from 'react'
import twitter from '../../assests/twitter.png'
import youtube from '../../assests/youtube.png'
import instagram from '../../assests/instagram.png'
import facebook from '../../assests/facebook.png'
import address from '../../assests/address.png'
import phone from '../../assests/call.png'
import email from '../../assests/email.png'

const h2class = 'font-bold text-blue-500 sm:text-lg text-[12px] sm:mb-5 mb-3'
function Section10() {
  return (
    <div className='bg-black text-white pt-10'>
      <div className="flex sm:justify-between justify-around sm:px-10 px-1 sm:py-3 pb-10">
        <div className="">
            <h2 className={`${h2class}`}>Quick Links:</h2>
            <ul className='sm:text-[16px] text-[10px] flex flex-col sm:gap-1 gap-2'>
                <li>Home</li>
                <li>About Us</li>
                <li>Membership</li>
                <li>Trainers</li>
            </ul>
        </div>
        <div className="">
            <h2 className={`${h2class}`}>Social Media:</h2>
            <ul className='sm:text-[16px] text-[10px] flex flex-col sm:gap-1 gap-2'>
                <li className='flex items-center gap-3'><img src={instagram} alt="" loading="lazy" className='invert sm:h-[20px] sm:w-[20px] h-[15px] w-[15px]' height={30} width={30}/>Instagram</li>
                <li className='flex items-center gap-3'><img src={youtube} alt="" loading="lazy" className='invert sm:h-[20px] sm:w-[20px] h-[15px] w-[15px]' height={30} width={30}/>Youtube</li>
                <li className='flex items-center gap-3'><img src={twitter} alt="" loading="lazy" className='invert sm:h-[20px] sm:w-[20px] h-[15px] w-[15px]' height={30} width={30}/>Twitter</li>
                <li className='flex items-center gap-3'><img src={facebook} alt="" loading="lazy" className='invert sm:h-[20px] sm:w-[20px] h-[15px] w-[15px]' height={30} width={30}/>Facebook</li>
            </ul>
        </div>
        <div className="">
            <h2 className={`${h2class}`}>Contact Us:</h2>
            <ul className='sm:text-[16px] text-[10px] flex flex-col sm:gap-1 gap-2'>
                <li className='flex items-center gap-3'><img src={address} alt="" loading="lazy" className='invert sm:h-[20px] sm:w-[20px] h-[15px] w-[15px]' height={30} width={30}/>: 1/23 AB, Ajmer</li>
                <li className='flex items-center gap-3'><img src={phone} alt="" loading="lazy" className='invert sm:h-[20px] sm:w-[20px] h-[15px] w-[15px]' height={30} width={30}/>: 9999999999</li>
                <li className='flex items-center gap-3'><img src={email} alt="" loading="lazy" className='invert sm:h-[20px] sm:w-[20px] h-[15px] w-[15px]' height={30} width={30}/>: info@mygym.com</li>
            </ul>
        </div>
      </div>
      <h1 className='text-center sm:ml-[-55px] text-gray-400 sm:text-lg text-[12px] sm:mt-5 mt-3 sm:pb-5 pb-3'>© 2025 FitGym. All Rights Reserved.</h1>
    </div>
  )
}

export default Section10
