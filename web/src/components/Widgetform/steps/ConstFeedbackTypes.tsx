import bugImageURL from "../../../assets/images/bug.svg";
import ideiaImageURL from "../../../assets/images/ideia.svg";
import thoughtImageURL from "../../../assets/images/thought.svg";

export const feedbackTypes = {
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

  export type FeedBackTypes = keyof typeof feedbackTypes;