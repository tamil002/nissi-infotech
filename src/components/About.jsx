import React from 'react'

const About = () => {
    return (
        <>
            <div id='about' className='bg-about bg-cover bg-center bg-no-repeat h-full md:h-[130vh]'>
                <div>
                    <h1 className='text-center md:text-cyan-700  font-serif font-bold text-4xl md:text-5xl pt-3'>About</h1>
                    <div className=' hidden md:flex gap-1 md:mx-20 backdrop-blur-2xl rounded-2xl md:mt-3 h-[100vh] md:h-[80vh]'>
                        <img

                            src='abt.jpg'
                            className='w-[60%] md:w-[120%] md:h-[65vh] m-6 mt-12 backdrop-blur-lg rounded-3xl'

                        />
                        <p className='text-white font-serif'>
                            <h1 className='text-cyan-500 mt-2 text-xl'>About Our Company</h1>
                            <h1 className='text-4xl font-extrabold text-black '>Best IT-Solutions company</h1>
                            <p className=' w-[50%] md:w-[100%] pr-3 pt-1 text-lg'>
                                Nissi Infotech is a complete web solutions company dealing in Web design ,Web Development,
                                Web Erp, Web Server, Digital marketing, Social media marketing ,Search Engine Optimization and
                                Web Portal Developments from India.
                                Nissi, derived from the word "Jehovah Nissi" - which means "God is my victory flag" is a biblical name.
                                Nissi Infotech is a 25 year old company started in 1997 as a simple web designing company and has grown to
                                provide multiple high end IT services to our customers..
                                <p>
                                    <h1 className='font-bold text-xl md:mt-1 p-2 border rounded-2xl md:mr-72 bg-slate-50 text-black'>We at Nissi Infotech are very good at following :-</h1>
                                    <p> 1. Web design<br />
                                        2. Web development<br />
                                        3. Search engine optimization and promotion<br />
                                        4. Social media marketing<br />
                                        5. Branding<br />
                                        6. Google workspace setup and support<br />
                                        7. Google Ads<br />
                                        8. Web /cloud based erp</p><br />
                                </p>
                            </p>
                        </p>
                    </div>
                </div>
                <div className='hidden md:grid text-white mx-4 pt-2 text-lg font-serif'>
                    <p>
                        We are ahead of other web designing company due to better customer need understanding, Personal attention,
                        timely delivery of products and services and competitive prices. We continuously gear up for new technology.
                    </p>
                    <h1 className='pt-2 pb-1 text-orange-500 text-3xl font-bold'>Mission & Vision</h1>
                    <p>Our mission and vision is to transform others business. So we start this from the smallest of business to the top most
                        corporate. We have plans and pricing that can fit your pocket whether you are a small micro business or a huge corporate.
                        Check some of our smallest plans, you will be surprised how we cater to the needs of industry and bring the smallest to the top.
                        How we help in transformation of business from small to huge. Insignificant to Significant.</p>
                </div>
                <div className='md:hidden text-white pb-2'>
                    <div className='mt-4 mx-2'>
                        <img

                            src='abt-mb.jpg'
                            className='w-[100%] rounded-lg  '

                        />
                    </div>
                    <div className='mx-2 mt-3 font-serif  rounded-lg px-2 backdrop-blur-2xl'>
                        <p>
                            <h1 className='text-xl text-cyan-500 font-bold pt-1'>About Our Company</h1>
                            <h1 className='text-4xl font-bold pt-1 text-black '>Best IT-Solutions company</h1>
                            <p className='text-[18px] pt-1'>
                                Nissi Infotech is a complete web solutions company dealing in Web design ,Web Development, Web Erp, Web Server, Digital marketing,
                                Social media marketing , Search Engine Optimization and Web Portal Developments from India.

                                <p>
                                    <h1 className='text-xl font-bold text-orange-400'>We at Nissi Infotech are very good at following :-</h1>
                                    <p>
                                        1. Web design<br />
                                        2. Web development<br />
                                        3. Search engine optimization and promotion<br />
                                        4. Social media marketing<br />
                                        5. Branding<br />
                                        6. Google workspace setup and support<br />
                                        7. Google Ads<br />
                                        8. Web /cloud based erp<br />
                                    </p>
                                </p>
                            </p>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
