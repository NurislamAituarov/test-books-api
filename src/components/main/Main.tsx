import './Main.scss';
import { Route, Routes } from 'react-router-dom';
import { BookInfo } from '../book-Info/BookInfo';
import { CardsBooks } from './CardsBooks';
import { BASE_URL } from '../../lib/helper';

export function Main() {
  return (
    <main className="wrapper">
      <Routes>
        <Route path={BASE_URL} element={<CardsBooks />}></Route>
        <Route path={`${BASE_URL}/bookInfo/:bookId`} element={<BookInfo />} />
      </Routes>
    </main>
  );
}
