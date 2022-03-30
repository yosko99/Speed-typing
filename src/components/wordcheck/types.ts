export enum WordStatus {
  current = 'text-info',
  noncurrent = 'text-primary',
  completed = 'text-success',
  failed = 'text-danger'
}

export interface WordType {
  word: string;
  status: WordStatus;
  done: boolean;
}

export interface Title {
  text: string;
  warn: boolean;
}
