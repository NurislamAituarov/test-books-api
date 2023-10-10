import { FormEvent, MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItemBooks, loader } from '../../store/actions/action';
import { searchBooks } from '../../api/client';
import { Select } from '../select/Select';
import { Search } from '../svg/Search';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

const itemCategories = [
  'All',
  'Art',
  'Biography',
  'Computers',
  'History',
  'Medical',
  'Poetry',
  'Fiction',
];
const itemSorting = ['relevance', 'newest'];

export function Header() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function onSearch(e: any) {
    e.preventDefault();

    const url = process.env.NODE_ENV === 'development' ? '/' : '/test-books-api/';

    navigate(url);

    if (value) {
      dispatch(loader());
      searchBooks(value, 0).then((data) => {
        if (data.data.totalItems === 0) {
          console.error('error');
          setTimeout(() => {
            alert('Произошла ошибка, не можем найти совпадения... ');
            window.location.reload();
          }, 1000);
        } else {
          dispatch(addItemBooks(data.data, value));
          dispatch(loader());
        }
      });
    }
  }

  return (
    <header className="App-header">
      <h1>Search for books</h1>
      <form onSubmit={onSearch} className="header__search">
        <input
          type="text"
          id="search"
          placeholder="Enter book title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Search onSearch={onSearch} />
      </form>
      <div className="header__select">
        <Select title="Categories" arr={itemCategories} />
        <Select title="Sorting By" arr={itemSorting} />
      </div>
    </header>
  );
}
