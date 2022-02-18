import { IData } from '../types/BooksType';

export const addItemBooks = (item: IData, value: string) => ({
  type: 'ADD_ITEM_BOOKS',
  payload: item,
  value,
});

export const addItemBooksExisting = (item: IData) => ({
  type: 'ADD_ITEM_EXISTING',
  payload: item,
});

export const addCategory = (category: string) => ({
  type: 'SELECT_CATEGORY',
  payload: category,
});

export const addSorting = (sort: string) => ({ type: 'ADD_SORT', payload: sort });

export const loader = () => ({ type: 'LOADER' });
