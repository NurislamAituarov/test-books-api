import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItemBooksExisting } from '../../store/actions/action';
import { searchBooks } from '../../api/client';
import { useAppSelector } from '../../hooks/hooks';
import { StateType } from '../../types/ReduxType';
import { IBooks } from '../../types/BooksType';
import { Loader } from '../Loader/Loader';
import { BookItem } from './BookItem';

export function CardsBooks() {
  const { booksData, category, sort, loader, value, arrBooks }: StateType = useAppSelector(
    (state) => state.reducer,
  );
  const [result, setResult] = useState(8);
  const dispatch = useDispatch();

  function categoryFn(arr: IBooks[]) {
    return arr.filter((item) => {
      if (category === 'All') {
        return item;
      }
      if (item.volumeInfo.categories && category === item.volumeInfo.categories[0]) {
        return item;
      }
    });
  }

  function sortFn(arr: IBooks[]) {
    if (sort === 'newest') {
      return arr.sort(function (a, b) {
        return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate);
      });
    }
    return arr;
  }

  function moreLoad() {
    setResult((result) => result + 8);
    if (
      result === 40 ||
      result === 80 ||
      result === 120 ||
      result === 140 ||
      result === 180 ||
      result === 220 ||
      result === 260 ||
      result === 300 ||
      result === 340 ||
      result === 380
    ) {
      searchBooks(value, result).then((result) => {
        dispatch(addItemBooksExisting(result.data));
      });
    }
  }

  const itemsBooks = arrBooks && sortFn(categoryFn(arrBooks));
  return (
    <>
      {booksData && <h2>Found {booksData.totalItems} results</h2>}
      <div className="block__items">
        {itemsBooks &&
          itemsBooks.slice(0, result).map((book: any, i: number) => {
            return (
              <BookItem
                key={i}
                id={book.id}
                category={book.volumeInfo.categories && book.volumeInfo.categories[0]}
                title={book.volumeInfo.title}
                date={book.volumeInfo.publishedDate}
                authors={book.volumeInfo.authors}
                img={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
              />
            );
          })}
      </div>
      {booksData && result < booksData.totalItems && (
        <button className="btn__more" onClick={moreLoad}>
          Load more
        </button>
      )}
      {loader && <Loader />}
    </>
  );
}
