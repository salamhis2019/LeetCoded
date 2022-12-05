interface Solution {
  code: string[];
  solutionDescription: string;
  solutionTitle: string;
}

export interface Problem {
  difficulty: string;
  difficultyId: number;
  id: number;
  name: string;
  param: string;
  solution: Solution;
}
