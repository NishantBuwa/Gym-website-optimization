import React from "react";
import ScrollStack from '../../components/lightswind/scroll-stack';

const cards = [
  {
    title: "Progress Over Perfection",
    subtitle: "Focus on consistent small improvements instead of chasing quick fixes — the results will compound over time.",
    badge: "Tip 1",
    color: 'green'
  },
  {
    title: "Hydrate to Dominate",
    subtitle: "Drink enough water throughout the day to keep your energy high, muscles fueled, and mind sharp during workouts.",
    badge: "Tip 2",
    color: 'red'
  },
  {
    title: "Form First, Weight Later",
    subtitle: "Master proper technique before increasing weight to avoid injuries and maximize muscle engagement.",
    badge: "Tip 3"
  },
  {
    title: "Rest is Part of Training",
    subtitle: "Your muscles grow and recover while you rest — skipping recovery can stall progress and lead to burnout.",
    badge: "Tip 4"
  },
  {
    title: "Nutrition Fuels Your Fitness",
    subtitle: "Aim for balanced meals with protein, healthy fats, and complex carbs to power your workouts and recovery.",
    badge: "Tip 5"
  },
  {
    title: "Mindset is Your Strongest Muscle",
    subtitle: "Stay disciplined and trust the process — your determination will outlast any temporary setback.",
    badge: "Tip 6"
  }
];


const Section3 = () => {
  return (
    <div className="bg-gradient-to-tr from-black from-20% via-slate-600 via-60% to-black to-80%  sm:pt-12 pt-10 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" >
      <h1 className='md:text-6xl sm:text-4xl text-3xl mx-auto sm:mt-20 text-center text-white'>TIPS FROM OUR TRAINERS</h1>
      <div className="[--card-height:150px] md:[--card-height:300px] sm:[--card-height:210px]">
        <ScrollStack cards={cards}  
          backgroundColor="green"
          cardHeight="var(--card-height)"
          animationDuration=".5s"
          sectionHeightMultiplier={2}
        />
      </div>
    </div>

  );
};

export default Section3;
