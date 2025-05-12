import React from 'react'

const Career = () => {
    return (
        <div id='career' className='bg-career bg-center bg-no-repeat bg-cover h-full md:h-[115vh] font-serif'>
            <h1 className='text-center text-5xl p-2 text-white font-bold'>Career</h1>
            <div className=' text-white rounded-2xl mx-3 justify-center px-4 py-3 text-xl mt-2 backdrop-blur-3xl'>
                <p>
                    Nissi Infotech Private Limited firmly believes in nurturing innate talent of its professionals, by bringing
                    out the best in them and offering its team a professional atmosphere, offering optimum growth opportunities.
                    Nissi Infotech offers the right climate and direction and believes in investing in periodical training of its
                    primary assets, its manpower.Ours is a people-focused organization. This is the reason why we have some of the
                    finest talents manning key positions, some of whom have risen through the ranks, in a remarkably short span of time.
                    We make every employee feel important and provide ample opportunities for the optimum and overall personality development
                    of each one of our manpower. It is our conviction that organizational goals should harmonize with individual aspirations and
                    that excellence should be recognized and rewarded.We are guided by values and commitment, synonymous with Nissi InfoTech’s vision.
                    We treat every one of our employees as an important asset and not merely as individuals.Professionals having the requisite zeal and
                    those who are highly creative, strong in conceptual and communication skills and looking for a long term career are actively encouraged
                    to apply to us at <a className='text-orange-500' href=''>
                        hr@nissiinfotech.com
                    </a>
                </p>
            </div>
            <div className='text-white grid md:flex md:flex-row gap-5 justify-center mt-4 pb-2'>
                <div className='md:w-[25%] w-[270px] backdrop-blur-xl rounded-xl'>
                    <h1 className='text-4xl text-center p-2 font-bold  text-teal-600'>Web Designer</h1>
                    <p className='px-2 flex flex-col gap-2 py-2'>
                        <h1><span>Experiance :</span> 0 - 1</h1>
                        <h1><span>Skills :</span> Html, Css, JavaScript, Adobe or Figma, React.</h1>
                        <h1><span>Working location :</span> Anywhere in Tamil Nadu (work from home)</h1>
                        <h1><span>Must have :</span> Good attitude and interest to learn</h1>
                        <h1 className='text-center text-2xl pb-3 hover:text-cyan-700 delay-75'><a href=''>Apply Now</a></h1>
                    </p>
                </div>

                <div className='md:w-[25%] w-[270px] backdrop-blur-xl rounded-xl'>
                    <h1 className='text-4xl text-center p-2 font-bold   text-teal-600'>Web Developer</h1>
                    <p className='px-2 flex flex-col gap-2 py-2'>
                        <h1><span>Experiance :</span> 0 - 1</h1>
                        <h1><span>Skills :</span> Html, Css, JavaScript,Php, Node.js, React or Angular, Sql.</h1>
                        <h1><span>Working location :</span> Anywhere in Tamil Nadu (work from home)</h1>
                        <h1><span>Must have :</span> Good attitude and interest to learn</h1>
                        <h1 className='text-center text-2xl hover:text-cyan-700 delay-75'><a href=''>Apply Now</a></h1>
                    </p>
                </div>

                <div className='md:w-[25%] w-[270px] backdrop-blur-xl rounded-xl'>
                    <h1 className='text-4xl text-center p-2 font-bold  text-teal-600'>Content Writer</h1>
                    <p className='px-2 flex flex-col gap-2 py-2'>
                        <h1><span>Experiance :</span> 0 - 1</h1>
                        <h1><span>Skills :</span> Effective Communication Skills, Strong Research Skills, Creativity and Originality.</h1>
                        <h1><span>Working location :</span> Anywhere in Tamil Nadu (work from home)</h1>
                        <h1><span>Must have :</span> Good attitude and interest to learn</h1>
                        <h1 className='text-center text-2xl hover:text-cyan-700 delay-75'><a href=''>Apply Now</a></h1>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Career
