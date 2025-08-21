import React, { useState, useEffect } from 'react'
import { TeamCarousel } from "../../components/lightswind/team-carousel"

const teamMembers = [
  {
    id: "1",
    name: "Ethan Cole",
    role: "Trainer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFrZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Helping clients smash fitness goals daily."
  },
  {
    id: "2",
    name: "Daniel Brooks",
    role: "Trainer",
    image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Strength coach focused on lasting results."
  },
  {
    id: "3",
    name: "Michael Turner",
    role: "Trainer",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Building muscle, discipline, and confidence."
  },
  {
    id: "4",
    name: "Ethan Clark",
    role: "Trainer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
    bio: "Guiding transformations through smart training"
  },
  {
    id: "5",
    name: "James Carter",
    role: "Trainer",
    image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Passionate about health and peak performance."
  },
];


function Section4() {

  const [cardHeight, setCardHeight] = useState(360)
  const [cardWidth, setCardWidth] = useState(300)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && window.innerWidth > 768) {
        setCardHeight(320);
        setCardWidth(200);
      }
      else if (window.innerWidth <= 768 && window.innerWidth > 640) {
        setCardHeight(300);
        setCardWidth(160);
      }
      else if (window.innerWidth <= 640) {
        setCardHeight(250);
        setCardWidth(90);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className=' bg-gradient-to-br from-black from-20% via-slate-600 via-60% to-black to-80% bg-cover bg-center pb-20' >
      <div className="lg:[--card-width:280px] md:[--card-width:200px] [--card-width:80px] lg:[--card-height:420px] md:[--card-height:320px] [--card-height:280px]">
        <h1 className='md:text-6xl sm:text-4xl text-3xl mx-auto pt-20 text-center text-white'>OUR TRAINERS</h1>
        <div className="mt-[-300px] sm:mt-0">
          <TeamCarousel
            members={teamMembers}
            titleColor="#1e40af"
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            infoTextColor="#1e40af"
          />

        </div>
      </div>

    </div>
  )
}

export default Section4
