export interface IPDF {
  title: string;
  discipline: string;
  body: IBody[];
}

export interface IBody {
  type: string;
  title: string;
  content: string[];
}
