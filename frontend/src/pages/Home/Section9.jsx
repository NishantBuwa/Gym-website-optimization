import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/lightswind/accordion';

const accordianData = [
    {
        question: 'What kind of equipment do you have ?',
        answer: 'Our gym is equipped with the latest cardio machines, strength training equipment, free weights, and functional training tools.'
    },
    {
        question: 'Do you offer group classes ?',
        answer: 'Yes, we host yoga, HIIT, Zumba, strength training, and mobility sessions led by certified instructors.'
    },
    {
        question: 'Is there guidance for beginners ?',
        answer: 'Definitely. Our trainers provide a fitness orientation program for new members to get comfortable with machines and safe workout techniques.'
    },
    {
        question: 'Do you help with diet & nutrition ?',
        answer: 'Yes, we offer nutrition counseling and meal guidance to complement your workout routine.'
    },
    {
        question: 'Do you provide personal trainers ?',
        answer: 'Absolutely. Our certified trainers design personalized workout & nutrition plans to help you reach your goals faster.'
    },
    {
        question: 'Do you have different membership plans ?',
        answer: 'Yes! We offer monthly, quarterly, half-yearly, and yearly plans with flexible options to match your fitness journey.'
    },
]

function Section9() {
    return (
        <div className='bg-gradient-to-br from-black from-20% via-slate-600 via-60% to-black to-80% pb-20'>
            <h1 className='md:text-6xl sm:text-4xl text-3xl mx-auto pt-20 text-center text-white mb-10'>FREQUENTLY ASKED QUESTIONS</h1>
            <div className="w-full flex justify-center items-center flex-col">
                {accordianData.map((data, index) => {
                    return (
                        <Accordion type="single" collapsible="true" className="lg:w-[1000px] md:w-[750px] w-[330px]" key={index} >
                            <AccordionItem value="item-1" className='flex flex-col justify-center w-full'>
                                <AccordionTrigger>{data.question}</AccordionTrigger>
                                <AccordionContent>{data.answer}</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )
                })}
            </div>
        </div>
    )
}

export default Section9