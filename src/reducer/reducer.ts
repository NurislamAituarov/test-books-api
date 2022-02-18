import { IData } from '../types/BooksType';

export interface StateType {
  booksData: IData | null;
  category: string;
  sort: string;
  loader: boolean;
  arrBooks: [];
  value: string;
}

interface ActionType {
  type: string;
  payload: any;
  value?: string;
}

const initialState: StateType = {
  booksData: null,
  arrBooks: [],
  value: '',
  loader: false,
  category: 'All',
  sort: 'relevance',
};

export function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case 'ADD_ITEM_BOOKS':
      return {
        ...state,
        booksData: action.payload,
        arrBooks: [...action.payload.items],
        value: action.value,
      };
    case 'ADD_ITEM_EXISTING':
      return {
        ...state,
        arrBooks: [...state.arrBooks, ...action.payload.items],
      };
    case 'SELECT_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'ADD_SORT':
      return {
        ...state,
        sort: action.payload,
      };
    case 'LOADER':
      return {
        ...state,
        loader: !state.loader,
      };

    default:
      return state;
  }
}
