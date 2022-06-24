import { IData } from '../types/BooksType';

export interface StateType {
  booksData: IData | null;
  category: string;
  sort: string;
  loader: boolean;
  arrBooks: [];
  value: string;
}

export interface ActionType {
  type: string;
  payload: any;
  value?: string;
}
