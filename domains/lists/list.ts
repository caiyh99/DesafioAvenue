export interface List {
  id?: string;
  name: string;
  idBoard: string;
  idListSource?: string;
  pos?: string | number;
  fields?: string;
  value?: string;
  closed?: boolean;
}

export interface ListParams {
  key: string;
  token: string;
}
