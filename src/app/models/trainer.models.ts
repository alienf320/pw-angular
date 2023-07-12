export interface Trainer {
  _id: string;
  type: string;
  name: string;
  teamSize: number;
  team: TeamMember[];
  __v: number;
}

export interface TeamMember {
  name: string;
  level: number;
  item: string;
  moves: string[];
  _id: string;
}
