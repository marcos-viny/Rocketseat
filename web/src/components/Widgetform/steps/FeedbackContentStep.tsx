import { ArrowArcLeft, ArrowLeft } from "phosphor-react";

import { CloseButton } from "../../CloseButton";
import { FeedBackTypes, feedbackTypes } from "./ConstFeedbackTypes";

interface FeedbackContentStepProps{
    feedbackType: FeedBackTypes;
}

export function FeedBackContentStep({feedbackType}: FeedbackContentStepProps){
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    return(
        <>
        <header>
            <button type="button" className=" top-5 left-5 absolute">
                <ArrowLeft weight="bold" className=" h-4 w-4"/>
            </button>

            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} 
                     className=" w-6 h-6"/>
                {feedbackTypeInfo.title}
            </span>
            <CloseButton />
        </header>
        <div className="flex py-8 gap-2 w-full">
         
      </div>
        </>
    );
}