export interface List {
  name: string;
  idBoard: string;
  idListSource?: string;
  pos?: string | number;
  fields?: string;
  value?: string;
}

export interface ListParams {
  key: string;
  token: string;
}
