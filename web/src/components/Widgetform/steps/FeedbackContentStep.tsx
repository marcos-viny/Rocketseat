import { ArrowArcLeft, ArrowLeft } from "phosphor-react";

import { CloseButton } from "../../CloseButton";
import { FeedBackTypes, feedbackTypes } from "./ConstFeedbackTypes";

interface FeedbackContentStepProps{
    feedbackType: FeedBackTypes;
    onFeedbackRestartRequested: () => void;
}

export function FeedBackContentStep({feedbackType, onFeedbackRestartRequested}: FeedbackContentStepProps){
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    return(
        <>
        <header>
            <button
             type="button"
             className=" top-5 left-5 absolute"
             onClick={onFeedbackRestartRequested}>
                <ArrowLeft weight="bold" className=" h-4 w-4 hover:text-brand-500 transition-colors"/>
            </button>

            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} 
                     className=" w-6 h-6"/>
                {feedbackTypeInfo.title}
            </span>
            <CloseButton />
        </header>
        
        <form className=" my-4 w-full">
            <textarea
                className=" 
                 min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400text-zinc-100
               border-zinc-600 bg-transparent rounded-md border-2 outline-none
                 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none"
                placeholder="Conte-nos o que está acontecendo..."
            />
        </form>
        </>
    );
}