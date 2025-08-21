import React from 'react'
import bg from '../../assests/bg-min.webp'
import StyledButton from '../../components/StyledButton'
import TargetCursor from '../../components/TargetCursor'

function Section1() {
  return (
    <div className='h-full'>
      <div className="hidden sm:block">
        {/* <TargetCursor spinDuration={2}
          hideDefaultCursor={true} /> */}
      </div>
      <div className="h-full bg-cover bg-center xl:pb-72 md:pb-56 pb-36" style={{ backgroundImage: `url(${bg})`}}>
        {/* <div className="sm:absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-0"></div> */}
        
        <div className="sm:ml-20 ml-6 sm:pt-20 pt-16 text-white z-40 flex flex-col gap-28">
          {/* <h1 className='text-6xl cursor-target'>Transform Your Health,<br /> Transfor Your Life</h1> */}
          <div className="sm:text-6xl text-4xl gap-5">
            <span className='cursor-target'>Transform </span>
            <span className='cursor-target'>Your </span>
            <span className='cursor-target'>Health, </span><br />
            <span className='cursor-target'>Transform </span>
            <span className='cursor-target'>Your </span>
            <span className='cursor-target'>Life</span>
          </div>
          <StyledButton/>
          {/* <button className='bg-green-600 px-2 py-1 w-[170px] rounded-md'>Check It Out</button> */}
        </div>
      </div>
    </div>
  )
}

export default Section1