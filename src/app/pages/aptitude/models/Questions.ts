export interface Options {
  value: string;
  isCorrect?: boolean;
}
export interface Question {
  value: string;
  options: Options[];
}
