import './Main.scss';
import { Route, Routes } from 'react-router-dom';
import { BookInfo } from '../BookInfo/BookInfo';
import { CardsBooks } from './CardsBooks';

export function Main() {
  return (
    <main className="wrapper">
      <Routes>
        <Route path="/" element={<CardsBooks />}></Route>
        <Route path="/bookInfo/:bookId" element={<BookInfo />} />
      </Routes>
    </main>
  );
}
