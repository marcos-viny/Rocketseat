import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";

import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { FeedBackTypes, feedbackTypes } from "./ConstFeedbackTypes";

interface FeedbackContentStepProps{
    feedbackType: FeedBackTypes;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export function FeedBackContentStep({
    onFeedbackSent, 
    feedbackType, 
    onFeedbackRestartRequested}: FeedbackContentStepProps){

    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');

    function handleSubmitFeedback(event: FormEvent){
        event.preventDefault();

        console.log(
            {
                screenshot,
                comment
            }
        );

        onFeedbackSent();
    }
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
        
        <form onSubmit={ handleSubmitFeedback } className="my-4 w-full">
            <textarea
                className=" 
                 min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400text-zinc-100
               border-zinc-600 bg-transparent rounded-md border-2 outline-none
                 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none"
                placeholder="Conte-nos o que está acontecendo..."
                onChange={event => setComment(event.target.value)}
            />

            <footer className=" flex gap-2 mt-2">

                <ScreenshotButton onScreenshotTook={ setScreenshot } screenshot={ screenshot }/>

                <button
                 type="submit"
                 disabled={comment.length < 10}
                 className=" p-2 bg-brand-500 rounded-[0.250rem] border-transparent flex-1 flex justify-center
                            items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 
                            disabled:opacity-50 disabled:hover:bg-brand-500">
                            Enviar feedBack
                </button>
            </footer>
        </form>
        </>
    );
}