import { CloseButton } from "../../CloseButton";
import { FeedBackTypes, feedbackTypes } from "./ConstFeedbackTypes";

interface FeedBackTypeStepProps {
    onFeedbackTypeChange: (type: FeedBackTypes) => void;
};

export function FeedBackTypeStep({ onFeedbackTypeChange }: FeedBackTypeStepProps){
    return(
        <>
        <header>
            <span className="text-xl leading-6">Deixe seu FeedBack.</span>
            <CloseButton />
        </header>
        <div className="flex py-8 gap-2 w-full">
          { Object.entries(feedbackTypes).map(([key, value]) => {
              return (
                 <button key={key}
                 onClick={() => onFeedbackTypeChange(key as FeedBackTypes)}
                 type="button"
                 className="
                 bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2
                  border-transparent transition-colors ease-linear duration-300 hover:border-brand-500
                  hover:scale-110 focus:border-brand-500 focus:outline-none focus:scale-110">
                     <img src={value.image.source} alt={value.image.alt} />
                    <span>{value.title}</span>
                 </button>
             ) 
          })}
      </div>
        </>
    );
};