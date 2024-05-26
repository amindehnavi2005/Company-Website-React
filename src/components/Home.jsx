import React from 'react'
import Banner from '../shared/Banner'

function Home() {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20'>
            <Banner
                heading={"بدون زحمت مهارت های خودت رو افزایش بده!"}
                subheading={"این متن یک متن تصادفی است و فاقد هرگونه معنایی است، این متن نوشته شده تا صرفا فضایی را اشغال کند تا برنامه نویسان بتوانند رابط کاربری مناسب تری را طراحی کنند."}
                banner={"/Banner.png"}
                btn1={"بزن بریم!"}
                btn2={"تخفیفات"}
            />
        </div>
    )
}

export default Home