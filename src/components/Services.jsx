import React from 'react'

const Services = () => {
    return (
        <div id='service' className='bg-service bg-cover bg-no-repeat bg-center h-full md:h-[120vh]'>
            <h1 className='text-5xl text-center pt-3 font-serif font-bold text-white'>Services</h1>
            <div className='md:mt-4 md:backdrop-blur-3xl md:rounded-3xl md:mx-16'>

                <div className='grid md:flex md:gap-10 font-serif md:justify-center'>
                    <div className='flex flex-col md:mx-5 md:my-5 my-4 mx-3 md:w-[300px] gap-3'>
                        <img

                            src='wb-dgn.jpg'
                            className='md:w-[300px]  rounded-2xl'

                        />
                        <button className="md:mx-10 mx-5 backdrop-blur-[20px] text-white text-2xl p-2 rounded " onClick={() => document.getElementById('my_modal_1').showModal()}>Web Designing</button>
                        <dialog id="my_modal_1" className="modal md:backdrop-blur-lg">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Web Design</h3>
                                <p className="py-2">Web Design usually refers to the design of the website which is displayed on the internet.
                                    A Web Designer is responsible for the design of the website.A Web Designer works on the layout,
                                    appearance and content of the website.</p>
                                <h1 className='text-xl font-bold pb-1'>Web Design Services :</h1>
                                <p>
                                    1.Custom Website Design<br />
                                    2.eCommerce Website Design<br />
                                    3.Responsive Website Design<br />
                                    4.Landing Page Design<br />
                                    5.Logo Design<br />
                                    6.Graphic Design
                                </p>
                            </div>
                        </dialog>
                    </div>

                    <div className='flex flex-col md:mx-5 md:my-5 md:mb-0 mb-4 mx-3 md:w-[300px] gap-3'>
                        <img

                            src='wb-dev.jpg'
                            className='md:w-[300px]  rounded-2xl'

                        />
                        <button className=" backdrop-blur-[20px] md:mx-10 mx-6  text-white text-2xl p-2 md:mt-2 rounded " onClick={() => document.getElementById('my_modal_2').showModal()}>Web Development</button>
                        <dialog id="my_modal_2" className="modal md:backdrop-blur-lg">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Web Development</h3>
                                <p className="py-1">
                                    Nissi Infotech is a leading Web development company in Coimbatore, Inida. We are the best in giving you the right solution and
                                    saving your money and time while website development.Developing the website as a dynamic site with CMS (content management system)
                                    behind the site.The website works in front and at the back end a full software is working . For example a Matrimonial site, shopping cart ,
                                    job site , school site , car based site, or any other official site that needs a huge software solution behind to process multiple activities
                                    of the company.The web development we mainly do with ASP.NET and ms sql as back end. (EX : <p className='font-bold'>E-commerce Website Development, Custom PHP Development, WordPress Development)</p>
                                </p>
                            </div>
                        </dialog>
                    </div>

                    <div className='flex flex-col md:mx-5 md:mt-6 mx-3 md:w-[300px] gap-3'>
                        <img

                            src='logo-dgn.jpg'
                            className='md:w-[300px]  rounded-2xl'

                        />
                        <button className=" backdrop-blur-[20px] md:mx-10 mx-5 text-white text-2xl p-2 rounded " onClick={() => document.getElementById('my_modal_3').showModal()}>Logo & Branding</button>
                        <dialog id="my_modal_3" className="modal md:backdrop-blur-lg ">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Logo & Branding</h3>
                                <p className="py-1">We don't just design logos at Nissi Infotech. Our creative process involves us.
                                    In a variety of styles, we create logos for a wide variety of industries using our proven design process and
                                    talented designers. </p>

                                <h1 className='text-xl font-bold pb-1'>Logo Design Service :</h1>
                                <p>
                                    1.Iconic Logo Design<br />
                                    2.Typography Logo Design<br />
                                    3.Illustrative Logo Design<br />
                                    4.Animated Logo Design<br />
                                    5.Brochure Designs<br />
                                    6.Flyers Designs
                                </p>
                            </div>
                        </dialog>
                    </div>

                </div>

                <div className='grid mt-[-2px] md:mt-0 md:flex md:gap-10 font-serif md:justify-center'>
                    <div className='flex flex-col md:mx-5 md:my-5 my-4 mx-3 md:w-[300px] gap-3'>
                        <img

                            src='seo.jpg'
                            className='md:w-[300px]  rounded-2xl'

                        />
                        <button className=" backdrop-blur-[20px] md:mx-10 mx-5 text-white text-2xl p-2 rounded " onClick={() => document.getElementById('my_modal_4').showModal()}>SEO</button>
                        <dialog id="my_modal_4" className="modal md:backdrop-blur-lg">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Search Engine Optimization</h3>
                                <p className="py-1"><h1 className='pb-2'>
                                    The future of SEO is here – understanding and marketing to specific and defined audiences through search engines
                                </h1>
                                    Nissi infotech is a professional best SEO company providing ethical SEO services in Coimbatore, India.
                                    SEO services are search engine optimization services intended to increase visibility and ultimately organic search
                                    traffic to websites.We offer plenty of SEO optimization services Coimbatore to meet the requirements of both small
                                    scale industries and corporate companies. Our professional SEO expert team uses ethical, effective and proven methods
                                    to attain top 10 rankings in search engines like Google, Yahoo and Bing. This increases the sales of your product and
                                    creates a global customer.
                                </p>
                            </div>
                        </dialog>
                    </div>

                    <div className='flex flex-col md:mx-5 md:my-5  mx-3 md:w-[300px] gap-3'>
                        <img

                            src='ggl-wrk.jpg'
                            className='md:w-[300px]  rounded-2xl'

                        />
                        <button className=" backdrop-blur-[20px] md:mt-1 md:mx-10 mx-6 text-white text-2xl p-2 rounded " onClick={() => document.getElementById('my_modal_5').showModal()}>Google Workspace</button>
                        <dialog id="my_modal_5" className="modal backdrop-blur-lg">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Google Workspace</h3>
                                <p className="py-1 ">

                                    <h1 className='font-semibold pb-1'>
                                        G Suite – Google workspace Nissi Infotech is the Authorized resellers of google for
                                        providing the google workspace services
                                    </h1>

                                    In the recent days, there are frequent complaints of emails and free emails being hacked,

                                    Paid domain emails are down constantly creating disturbances to the business.

                                    The emails have become integral part of business, its important to take steps to protect the emails.

                                    Especially those who are using the free emails, If the mails are hacked, the emails are lost for ever and hacker uses valid data in the emails.
                                    <p className='pt-1'>
                                        A.Your current email shifted to google<br />
                                        B.You can check email business email as you check gmail<br />
                                        C.Google provided top security<br />
                                        D.Google provided virus protection<br />
                                        E. Local support by Nissi
                                    </p>
                                </p>
                            </div>
                        </dialog>
                    </div>

                    <div className='flex flex-col md:mx-5 md:my-5 my-4 mx-3 md:w-[300px] gap-3'>
                        <img

                            src='cnt-wrt.jpg'
                            className='md:w-[300px]  rounded-2xl'

                        />
                        <button className=" backdrop-blur-[20px] md:mx-10 mx-5 text-white text-2xl p-2 rounded " onClick={() => document.getElementById('my_modal_6').showModal()}>Content Writting</button>
                        <dialog id="my_modal_6" className="modal backdrop-blur-lg">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Welcome to our top-notch Content Writing Services</h3>
                                <p className="py-1">

                                    In today's digital world, where words have become the most powerful tool for businesses to connect with their audience,
                                    harnessing the art of effective content writing is paramount. Whether you run a startup, a small business, or a multinational
                                    corporation, the quality of your content can make or break your online presence.At Nissi Infotech, we understand the significance
                                    of compelling and engaging content in the success of any brand. We are a team of skilled and passionate writers who specialize in
                                    crafting content that not only resonates with your target audience but also elevates your brand to new heights.Our Content Writing Services
                                    encompass a wide array of industries and niches, providing you with tailor-made solutions to meet your unique requirements.

                                </p>
                            </div>
                        </dialog>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services
