import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';

export function Widget(){

    const [ isWidgetOpen, setIsWidGetOpen] = useState(false);

    function toggleWidgetVisibility(){
        setIsWidGetOpen(!isWidgetOpen)
    }

    return(
            <div className='absolute bottom-5 right-5'>
                {/* {isWidgetOpen ? <p>Hello Word</p> : null} */}
                {isWidgetOpen && <p>Hello Word</p>}

                <button onClick={toggleWidgetVisibility} className='bg-brand-500 px-3 rounded-full h-12 text-white flex items-center group'>
                    <ChatTeardropDots className="w-6 h-6"/>

                    <span className='max-w-0 overflow-hidden hover:max-w-auto group-hover:max-w-xs duration-500 transition-all ease-linear delay-75'>
                        <span className='pl-2'></span>
                        FeedBack
                    </span>
                </button>
            </div>
    )
}