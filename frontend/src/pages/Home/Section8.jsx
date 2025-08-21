import React from 'react'
import { Compare } from '../../components/Compare'
import after1 from '../../assests/after1.webp'
import before1 from '../../assests/before1.webp'
import after2 from '../../assests/after2.webp'
import before2 from '../../assests/before2.webp'
import after3 from '../../assests/after3.webp'
import before3 from '../../assests/before3.webp'
import after4 from '../../assests/after4.webp'
import before4 from '../../assests/before4.webp'

const images = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 }
]
function Section8() {
    return (
        <div className='bg-gradient-to-tr from-black from-20% via-slate-600 via-60% to-black to-80%'>
            <h1 className='md:text-6xl sm:text-4xl text-3xl mx-auto sm:pt-20 pt-5 text-center text-white px-4 sm:px-0'>BEFORE & AFTER: THE POWER OF CONSISTENCY</h1>
            <p className="md:text-3xl sm:text-2xl text-md text-center text-white mt-6 sm:mb-10 mb-3">
                Drag the slider to reveal the transformation
            </p>
            <div className="p-4 flex flex-wrap justify-center gap-10 mt-10">

                {(images.map((image, index) => {
                    return (
                        <Compare
                            key={index}
                            firstImage={image.before}
                            secondImage={image.after}
                            firstImageClassName="object-contain"
                            secondImageClassname="object-contain"
                            className=" h-[200px] w-[150px] sm:h-[250px] sm:w-[200px] md:h-[400px] md:w-[360px] bg-slate-500 rounded-xl border "
                            slideMode="hover"
                        />
                    )
                }))}
            </div>
        </div>
    )
}

export default Section8