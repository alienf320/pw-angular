import { Move } from "./move.models";

export interface TM {
  _id?: string,
  name: string;
  move: Move;
}

export interface TMResponse {
  canLearnTMs: {
    [key: string]: boolean
  };
}
