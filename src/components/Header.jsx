import { useState } from "react";
import { IoIosMenu } from "react-icons/io";



const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='flex justify-between px-3 md:h-[10vh] bg-white'>
            <div>
                <img className='w-[120px] h-[40px] mt-2 md:mb-2' src='./assets/logo.png' alt="Logo" />
            </div>
            <div>
                <nav>
                    <ul className='hidden md:flex gap-3 font-serif text-2xl mt-3 text-black'>
                        <li className="hover:text-[#3f6fc9] delay-300"><a href='#home'>Home</a></li>
                        <li className="hover:text-[#3f6fc9] delay-300"><a href='#about'>About</a></li>
                        <li className="hover:text-[#3f6fc9] delay-300"><a href='#service'>Services</a></li>
                        <li className="hover:text-[#3f6fc9] delay-300"><a href='#career'>Career</a></li>
                        <li className="hover:text-[#3f6fc9] delay-300"><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
                {toggleMenu &&
                    <nav className="md:hidden block">
                        <ul onClick={() => setToggleMenu(!toggleMenu)} className='fixed flex flex-col  gap-5 top-16 pt-10  text-white text-center w-[100%] h-[91%] backdrop-blur-xl font-serif text-3xl left-0'>
                            <li className="hover:text-[#3f6fc9] "><a href='#home'>Home</a></li>
                            <li className="hover:text-[#3f6fc9] "><a href='#about'>About</a></li>
                            <li className="hover:text-[#3f6fc9] "><a href='#service'>Services</a></li>
                            <li className="hover:text-[#3f6fc9] "><a href='#career'>Career</a></li>
                            <li className="hover:text-[#3f6fc9] "><a href='#contact'>Contact</a></li>
                        </ul>
                    </nav>
                }
                <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden" ><IoIosMenu className="size-12 mt-2 text-slate-600 " /></button>
            </div>
        </div>
    )
}

export default Header
