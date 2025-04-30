export const capitalizeSentence = (sentence: string): string => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}