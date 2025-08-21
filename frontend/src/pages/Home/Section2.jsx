import React from 'react'
import { GlowingCards, GlowingCard } from "../../components/lightswind/glowing-cards"
import access from '../../assests/access.webp'
import hygiene from '../../assests/hygiene.webp'

const optimizeImage = (url) => {
  return {
    src: `${url}&w=800&auto=format&fit=crop&fm=webp&q=75`, // default (large)
    srcSet: `
      ${url}?w=350&auto=format&fit=crop&fm=webp&q=70 400w,
      ${url}?w=5500&auto=format&fit=crop&fm=webp&q=70 600w,
      ${url}?w=750&auto=format&fit=crop&fm=webp&q=75 800w
    `,
    sizes: "(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
  };
};

const data = [
  {
    name:'Equipment',
    heading: 'State-of-the-Art Equipment',
    content: 'Top-quality machines and free weights to suit all fitness levels, ensuring safe and effective workouts.',
    color: '#3df26d',
    ...optimizeImage('https://plus.unsplash.com/premium_photo-1671631630555-1cb3ffa7dfe6')
  },
  {
    name:'Personal Trainer',
    heading: 'Certified Personal Trainers',
    content: 'Expert guidance with customized workout plans to help you reach your goals faster.',
    color: '#eb2723',
    ...optimizeImage('https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372')
  },
  {
    name:'Wellness Zone',
    heading: 'Recovery & Wellness Zone',
    content: 'Facilities like stretching areas, foam rollers, and massage chairs to speed up recovery.',
    color: '#18dcf2',
    ...optimizeImage('https://plus.unsplash.com/premium_photo-1683133816393-b04d94c65872')
  },
  {
    name:'24/7 Access',
    heading: '24/7 Access',
    content: 'Workout anytime that fits your schedule with round-the-clock gym access.',
    color: '#e3d80b',
    link: access
  },
  {
    name:'Diet',
    heading: 'Nutrition & Diet Plans',
    content: 'Personalized meal plans and nutrition advice to complement your training.',
    color: '#f00cce',
    ...optimizeImage('https://plus.unsplash.com/premium_photo-1683133816393-b04d94c65872')
  },
  {
    name:'Hygienic Environment',
    heading: 'Clean & Hygienic Environment',
    content: 'Regularly sanitized spaces and fresh air circulation for a safe workout experience.',
    color: '#3c05f0',
    link: hygiene
  },
]

function Section2() {
  return (
    <div className='bg-gradient-to-br from-black from-20% via-slate-600 via-60% to-black to-80% flex items-center flex-col justify-center text-white pb-32'>
      <h1 className='md:text-6xl sm:text-4xl text-3xl mx-auto sm:mt-36 mt-20'>FEATURES OF OUR GYM</h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 xl:w-[1100px] md:w-[700px] w-[350px] mt-10 ">
        {data.map((data1, index) => {
          return (
            <GlowingCards enableGlow={true}
              key={index}
              glowRadius={30}
              glowOpacity={0.8}
              animationDuration={500}
              gap="4rem"
              responsive={true}
              className='h-[300px]'>
              <GlowingCard
                glowColor={data1.color}
                className="space-y-4 h-full flex flex-col items-center justify-center sm:hover:border-none border border-white relative overflow-hidden rounded-xl"
              >
                <img
                  src={data1.src || data1.link}
                  srcSet={data1.srcSet}
                  sizes={data1.sizes}
                  alt={data1.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                
                {/* Content on top of image */}
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-3xl text-orange-300 w-[250px] h-[70px]">{data1.heading}</h2>
                  <p className="mt-3 w-[250px] h-[100px] text-white">{data1.content}</p>
                </div>
              </GlowingCard>

              {/* </div> */}
            </GlowingCards>
          )
        })}
      </div>
    </div>
  )
}

export default Section2