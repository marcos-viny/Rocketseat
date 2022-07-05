import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedBackTypes } from "./steps/ConstFeedbackTypes";
import { FeedBackContentStep } from "./steps/FeedbackContentStep";
import { FeedBackSuccessStep } from "./steps/FeedbackSuccessStep";
import { FeedBackTypeStep } from "./steps/FeedbackTypeStep";

export function WidGetForm() {
  const [feedBackType, setFeedBackType] = useState<FeedBackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedBack(){
    setFeedBackType(null);
    setFeedbackSent(false);
  };

  return (
    <>
    <div
      className="
        bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col 
        items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

     {feedbackSent ? (
       <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedBack}/>
     ):
     (
       <>
        {!feedBackType ? (
        <FeedBackTypeStep onFeedbackTypeChange={setFeedBackType} />
      ) : (
        <FeedBackContentStep feedbackType={feedBackType}
        onFeedbackRestartRequested={handleRestartFeedBack}
        onFeedbackSent={() => setFeedbackSent(true)}/>
      )}
       </>
     )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="hover:text-brand-500 transition-colors underline underline-offset-2"
          href="https//rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
    </>
  );
};

//  Teste da feature
