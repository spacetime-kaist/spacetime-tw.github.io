import React, { useState } from 'react'


function Home() {
  let welcome = '어서오세요!'

  // const [welcomeState,setWelcomeState] = useState('');
  // const [cnt,setCnt] = useState(0);
  // const [showDelayedText, setShowDelayedText] =
  //       useState(false);
  const [isVisible,setIsVisible] = useState(true)
  const handleScroll = (e) =>{
    const{scrollTop,scrollHeight,clientHeight} =e.target;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    if(scrollRatio>0.01){
      setIsVisible(false)
    }else{
      setIsVisible(true)
    }
  }
 
  
  return (
    <main className=''>
        <div className='w-[100vw] h-[100vh] scrollable-section' onScroll={handleScroll} >
        {isVisible&&
        <div className="mt-64 space-y-5 motion-safe:animate-pulse w-full flex flex-col justify-center items-center text-5xl md:text-8xl text-gray-800 font-tenada">
          {/* {welcomeState} */}
          <span>{welcome}</span>
          
          {/* <a href='#section2' id='scrolldown'><ChevronDownIcon className="-mr-1 w-20 h-20 md:w-32 md:h-32 text-gray-800 font-extrabold" aria-hidden="true" /></a> */}
        </div>}
        <span className='mt-10 space-y-5 w-full flex flex-col justify-center items-center text-4xl md:text-7xl text-yellow-500/80 font-tenada'>
          {'JO 님'}</span>
        <div id='section2' className=''>
          {/* <Home/> */}
        </div>
        {/* <TailOnScroll>
          <p className="text-3xl h-[15em] w-[15em]">
            흠
          </p>
        </TailOnScroll> */}
      </div>
    </main>
  )
}

export default Home