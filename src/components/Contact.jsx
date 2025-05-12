import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='bg-contact bg-cover bg-center bg-no-repeat h-full md:h-[80vh] font-serif'>
            <h1 className='text-5xl text-center font-bold pt-3 text-cyan-700'>Contact Us</h1>
            <div className='grid gap-8 md:flex md:gap-28 justify-center pb-2 mt-9'>

                <div className="md:w-72 w-64 rounded-3xl backdrop-blur-xl text-white">
                    <figure className="px-5 pt-5 pb-3">
                        <a href='https://www.google.com/maps/dir//3%2F42-12,+Nagappa+Colony,+Koundampalayam,+Coimbatore,+Tamil+Nadu+641030/@11.0495795,76.8988736,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8591f1aacb3bb:0x65f3db0adda50cab!2m2!1d76.9400737!2d11.049498?hl=en&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D'>
                            <img
                                src="location.jpeg"
                                className="rounded-xl" />
                        </a>
                    </figure>
                    <p className='text-center pb-2'>
                        <h1 className='text-2xl pb-1'>Location</h1>
                        <p>
                            3/42-12, Nagappa Colony,<br />
                            Kavundampalayam Coimbatore - 641030 <br />
                            Tamil Nadu, India.
                        </p>
                    </p>
                </div>

                <div className="w-64 rounded-3xl  backdrop-blur-xl text-white">
                    <figure className="px-5 pt-5 pb-3">
                        <a href=''>
                            <img
                                src="email.jpg"
                                className="rounded-2xl" />
                        </a>
                    </figure>
                    <p className='text-center pb-2'>
                        <h1 className='text-2xl pb-1'>Email</h1>
                        <p className='text-xl pt-2'>
                            sales@nissiinfotech.com
                        </p>
                    </p>
                </div>

                <div className="w-64 rounded-3xl backdrop-blur-xl text-white">
                    <figure className=" px-16 pt-5 pb-3">
                        <a href=''>
                            <img
                                src="cell.jpeg"
                                className="rounded-xl" />
                        </a>
                    </figure>
                    <p className='text-center pb-2'>
                        <h1 className='text-2xl pb-1'>Phone</h1>
                        <p className='font-sans text-lg'>
                            +91-90037 44644 <br />
                            +91-99940 93339 <br />
                            +91 98422 44488


                        </p>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Contact
