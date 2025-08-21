import React from 'react'
import { AnimatedTestimonials } from '../../components/AnimatedTestimonials'

const optimizeImage = (url) => {
  return {
    src: `${url}&w=800&auto=format&fit=crop&fm=webp&q=75`, // default (large)
    srcSet: `
      ${url}?w=400&auto=format&fit=crop&fm=webp&q=70 400w,
      ${url}?w=600&auto=format&fit=crop&fm=webp&q=70 600w,
      ${url}?w=800&auto=format&fit=crop&fm=webp&q=75 800w
    `,
    sizes: "(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
  };
};

const testimonials = [
    {
        quote: "Joining this gym was the best decision I ever made! The trainers are supportive, and I’ve seen amazing results in just a few months.",
        name: "Aarav Mehta",
        designation: "Lost 12kg in 3 months",
        ...optimizeImage("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"),
    },
    {
        quote: "The group classes are fun and motivating. I never thought workouts could be this enjoyable and effective at the same time!",
        name: "Priya Sharma",
        designation: "Member since 2023",
        ...optimizeImage("https://images.unsplash.com/photo-1438761681033-6461ffad8d80"),
    },
    {
        quote: "From strength training to nutrition guidance, everything is top-notch here. I feel stronger and more confident than ever.",
        name: "Rohan Patel",
        designation: "Gained 8kg muscle in 6 months",
        ...optimizeImage("https://images.unsplash.com/photo-1623582854588-d60de57fa33f"),
    },
    {
        quote: "The trainers push you just enough to achieve your best. I've built consistency and discipline that I never had before.",
        name: "Neha Kapoor",
        designation: "Yoga & HIIT enthusiast",
        ...optimizeImage("https://images.unsplash.com/photo-1636041293178-808a6762ab39"),
    },
    {
        quote: "State-of-the-art equipment, great vibe, and friendly community. This gym feels like my second home!",
        name: "Karan Singh",
        designation: "Member since 2022",
        ...optimizeImage("https://images.unsplash.com/photo-1624561172888-ac93c696e10c"),
    },
];

function Section7() {
    return (
        <div className='bg-gradient-to-br from-black from-20% via-slate-600 via-60% to-black to-80%'>
            <h1 className="md:text-6xl sm:text-4xl text-[28px] text-center text-white pt-20">
                WHAT OUR MEMBERS SAY
            </h1>
            <div className="sm:mt-7 w-[90%] mx-auto rounded-xl">
                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </div>
    )
}

export default Section7