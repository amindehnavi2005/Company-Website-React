import React from 'react'

function Banner({ banner, heading, subheading, btn1, btn2 }) {
    return (
        <div className='gradientBg rounded-xl rounded-bl-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                <div>
                    <img src={banner} alt="بنر" className='lg:h-[386px]' />
                </div>
                <div className='md:w-3/5'>
                    <h2 className='text-white md:text-6xl text-3xl font-bold mb-6 leading-relaxed'>{heading}</h2>
                    <p className='mb-8 text-white text-xl'>{subheading}</p>
                    <div className='space-x-5 space-y-4 '>
                        <button className='btnPrimary'>{btn1}</button>
                        <button className='btnPrimary'>{btn2}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner