import React, { useState, useEffect } from 'react'
import DraggableImages from '../../components/lightswind/draggable-3d-image-ring'

const images = [
  "https://media.istockphoto.com/id/1211886793/photo/modern-gym-interior-with-sport-and-fitness-equipment-fitness-center-interior-interior-workout.jpg?s=612x612&w=0&k=20&c=2Z59NU1vEZ1x1fbOBNvxKgEZXlukQ0B-uWtj5Jmejc4=",
  "https://i.pinimg.com/736x/1a/dd/7b/1add7b4908fdc6bd15bd80ef6e4f72cb.jpg",
  "https://foyr.com/learn/wp-content/uploads/2024/01/Plants-on-home-gym.webp",
  "https://img.freepik.com/free-photo/gym-with-indoor-cycling-equipment_23-2149270210.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/sport-equipment-modern-treadmills-with-control-panels-standing-row-gym_116547-32400.jpg",
  "https://cdn.trendhunterstatic.com/thumbs/288/futuristic-equipment_d8e8a7d4.jpeg",
  "https://assets-news.housing.com/news/wp-content/uploads/2022/11/25125658/Gym-interior-7.png",
  "https://www.cyclingbears.com/cdn/shop/articles/CB_Watermarks_2280_x_1800_px_1920_x_1500_px_20_2e7f2b53-f9b6-49a4-afbc-bf593e33f119.svg?v=1745382064"
]

function Section5() {

  const [cardHeight, setCardHeight] = useState(420)
  const [cardWidth, setCardWidth] = useState(320)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardWidth(210);
        setCardHeight(350);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className=" bg-gradient-to-tr from-black from-20% via-slate-600 via-60% to-black to-80% flex flex-col items-center justify-start py-16">
      <h1 className="md:text-6xl sm:text-4xl text-3xl text-center text-white">
        GYM INTERIORS
      </h1>
      <p className="md:text-3xl sm:text-2xl text-md text-center text-white mt-6 sm:mb-10 mb-3">
        Drag, explore, and experience the vibe of our premium workout spaces.
      </p>
      {/* <div className="mt-12 w-full flex justify-center border border-red-500 text-white"> */}
      <DraggableImages images={images} cardHeight={cardHeight} cardWidth={cardWidth} />
      {/* </div> */}
    </div>
  );
}

export default Section5