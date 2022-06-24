import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItemBooks, loader } from '../../actions/action';
import { searchBooks } from '../../Api/client';
import { Select } from '../Select/Select';
import { Search } from '../Svg/Search';
import './Header.scss';

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

  function onSearch() {
    if (value) {
      dispatch(loader());
      searchBooks(value, 0).then((data) => {
        if (data.data.totalItems === 0) {
          console.error('error');
          setTimeout(() => {
            alert('Произошла ошибка, не можем найти совпадения... ');
            window.location.href = 'http://localhost:3000/';
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
      <label className="header__search" htmlFor="search">
        <input
          onKeyPress={(e) => {
            if (e.code === 'Enter') {
              onSearch();
            }
          }}
          type="text"
          id="search"
          placeholder="Enter book title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Search onSearch={onSearch} />
      </label>
      <div className="header__select">
        <Select title="Categories" arr={itemCategories} />
        <Select title="Sorting By" arr={itemSorting} />
      </div>
    </header>
  );
}
