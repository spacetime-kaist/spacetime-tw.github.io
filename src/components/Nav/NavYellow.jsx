import React from 'react'
import { Link } from 'react-router-dom'
import WriteDropDown from './WriteDropDown';
import reactsvg from '../../assets/react.svg'
import NavDropDown from './NavDropDown';
// import dogpaw from '../../assets/images/button/dogpaw_button.png'

export default function Navbar() {
    const write_maintxt = '글쓰기'
    const write_droplist = [
        { name: '커뮤니티/Q&A 쓰기', to: '/board/write/0' },
        { name: '보호소 리뷰 쓰기', to: '/board/write/1' },
    ];
    const boards_maintxt = '보드'
    const boards_droplist = [
        { name: '커뮤니티/Q&A', to: '/boards' },
        { name: '보호소 리뷰', to: '/reviews/0' },
    ];
    const nav_maintxt = <img src={reactsvg} className='w-8 h-8 md:w-10 md:h-10' alt='dogpaw_button' />
    const nav_droplist = [
        {
            title: 'Main',
            list: [{ name: '홈', icon: '🏡', to: '/home' },
            // { name: '테스트', icon: '🧺', to: '/test' }
        ],
        },
        {
            title: '유기동물',
            list: [{ name: '유기동물', icon: '🐇', to: '/find' }],
        },
        {
            title: '보드',
            list: [{ name: '게시판', icon: '🙋‍♀️', to: '/boards' },
            { name: '보호소', icon: '🏦', to: '/reviews/0' }],
        },
        {
            title: '글쓰기',
            list: [{ name: '게시글', icon: '✍', to: '/board/write/0' },
            { name: '리뷰', icon: '⭐', to: '/board/write/1' }],
        },
    ];
    // const navMenu = [
    //     {name:'대시보드',to:'#',current:true},
    //     {name:'홈',to:'/home',current:false},
    //     {name:'테스트',to:'/test',current:false},

    // ];
    const linkShape = 'w-24 block pt-3 pb-2 px-3 rounded-md lg:mt-0 mr-4 flex flex-row justify-center items-center'
    const linkFont = ' text-slate-800 font-tenada '
    const linkDesign = ' text-sm border border-yellow-300 border-2 bg-white/[0.7] '
    const linkHover = ' hover:bg-orange-400 hover:text-white '
    return (
        <nav className="totalContainer">
            <div className=" w-full min-w-96 p-4 flex justify-center items-center">
                {/* inline: 한줄 처리, flex 랑 충돌 (display-flex,display-inline,display-block) */}
                <div className='hidden lg:flex basis-5/12 justify-evenly'>
                    <Link to="/" className={` ${linkShape} ${linkDesign} ${linkHover} ${linkFont}`}>
                        홈
                    </Link>
                    {/* <Link to="/test" className={`${linkShape} ${linkDesign} ${linkHover} ${linkFont}`}>
                        테스트
                    </Link> */}
                    <Link to="/find" className={`${linkShape} ${linkDesign} ${linkHover} ${linkFont}`}>
                        유기동물
                    </Link>
                </div>
                <Link to="/" className={`basis-2/12 flex justify-center items-center text-2xl ${linkFont} `}>
                    MyPetFinder
                </Link>
                <div className='hidden lg:flex basis-4/12 justify-evenly items-center'>
                    <WriteDropDown maintxt={boards_maintxt} droplist={boards_droplist} />
                    <WriteDropDown maintxt={write_maintxt} droplist={write_droplist} />

                </div>
                <div className='basis-1/12'/>
            </div>
            <div className='fixed top-1 right-1 z-40 flex flex-row justify-center items-center'>
            <Link to="/user/login" className={` pt-1 px-1 rounded-lg flex justify-center items-center border-[3px] border-dotted border-yellow-400 ${linkHover} ${linkFont}`}>
                        Login
                    </Link>
                <NavDropDown maintxt={nav_maintxt} droplist={nav_droplist} />
            </div>
        </nav>
    )
}