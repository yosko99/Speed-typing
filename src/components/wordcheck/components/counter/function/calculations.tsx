import { WordStatus, WordType } from '../../../types';

const wordMin = (words: WordType[]): number => {
  return completedWords(words).length;
};

const completedWords = (words: WordType[]): WordType[] => {
  return words.filter((word: WordType) => word.status === WordStatus.completed);
};

const nonCompletedWords = (words: WordType[]): WordType[] => {
  return words.filter((word) => word.status === WordStatus.failed);
};

const charMin = (words: WordType[]) :number => {
  const chars: string[] = [''];
  completedWords(words).forEach(word => {
    chars.push(word.word);
  });
  return Math.floor((chars.join(',').length / 5) / 1);
};

const checkAccuracy = (words: WordType[]) :number => {
  const accuracy = completedWords(words).length / (completedWords(words).length + nonCompletedWords(words).length) * 100;
  return Math.floor(accuracy) || 0;
};

export { wordMin, charMin, checkAccuracy };
