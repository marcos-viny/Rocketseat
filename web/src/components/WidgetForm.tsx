import { CloseButton } from "./CloseButton";

import bugImageURL from '../assets/images/bug.svg'
import ideiaImageURL from "../assets/images/ideia.svg";
import thoughtImageURL from "../assets/images/thought.svg";


const feedbackTypes: Array<any> = [
     {
        name:"Bug",
        title: 'Problema',
        image: {
            source: bugImageURL,
            alt: 'Problema'
        }
    }
];

export function WidGetForm() {
  return (
    <div
      className="
        bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col 
        items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu FeedBack.</span>
        <CloseButton />
      </header>

        <div className=" flex py-8 gap-2 w-full">
            { feedbackTypes.map((value:any, index:number) => {
                console.log('Key', index);
                // console.log('value', value);
                
                return (
                    <button key={index}>
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
}
