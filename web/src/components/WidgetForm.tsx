import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImageURL from '../assets/images/bug.svg'
import ideiaImageURL from "../assets/images/ideia.svg";
import thoughtImageURL from "../assets/images/thought.svg";


const feedBackTypes = {
  Bug: {
    title: 'Problema',
    image: {
        source: bugImageURL,
        alt: 'Imagem de um inseto'
    }
},
IDEIA:{
    title: 'Ideia',
    image: {
        source: ideiaImageURL,
        alt: 'Imagem de uma lâmpada'
    }
},
OTHER:{
    title: 'Other',
    image: {
        source: thoughtImageURL,
        alt: 'Imagem de um balão de pensamento'
    }
}
};

type FeedBackTypes = keyof typeof feedBackTypes;

export function WidGetForm() {

  const [ feedbackTypes, setFeedbackTypes ] = useState<FeedBackTypes | null>(null);

  return (
    <div
      className="
        bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col 
        items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu FeedBack.</span>
        <CloseButton />
      </header>

        <div className="flex py-8 gap-2 w-full">
            { Object.entries(feedBackTypes).map(([key, value]) => {
                return (
                   <button key={key}
                   onClick={() => setFeedbackTypes(key as FeedBackTypes)}
                   type="button"
                   className="
                   bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2
                    border-transparent transition-colors ease-linear duration-300 hover:border-brand-500
                    hover:scale-110 focus:border-brand-500 focus:outline-none focus:scale-110" 
                    >
                       <img src={value.image.source} alt={value.image.alt} />
                      <span>{value.title}</span>
                   </button>
               ) 
            })}
        </div>

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="hover:text-brand-500 transition-colors underline underline-offset-2"
          href="https//rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
