import React from 'react'
import Header from './Header'


const Home = () => {
    return (
        <div >

            <div id='home' className='bg-home  bg-cover bg-no-repeat bg-center h-[100vh] md:backdrop-contrast-75'>
                <Header />
                <div>
                    <div>
                        <p className='text-center font-extrabold text-slate-50 md:text-slate-200 md:text-[43px] text-[35px] font-serif mt-24  rounded-3xl md:mx-64 p-5 md:backdrop-blur-lg  md:mt-36'>
                            Leading Website Design & Development<br /> Company in Coimbatore, India
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
